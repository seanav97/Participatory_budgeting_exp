<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <div v-if="!server_error" id="connection good">
        <router-view v-if='!userBlacklisted && !userAllreadyExists'></router-view>
        <div v-else-if='userBlacklisted' style="width:80%;padding-left: 25%;font-size: 50px;">
          <br><br>
          <b-alert show variant="danger">User failed to answer the quiz correctly and is now forbidden from participating</b-alert>
        </div>
        <div v-else-if='userAllreadyExists' style="width:80%;padding-left: 25%;font-size: 50px;">
          <br><br>
          <b-alert show variant="warning">User already participated in the experiment</b-alert>
        </div>
    </div>
    <div v-else id="connection error">
      <b-alert show variant="danger" style="width:80%;padding-left: 25%;font-size: 50px;">
        A connection error accured, please contact the administrator.
      </b-alert>
    </div>
  </div>
</template>

<script>
// import NavBar from "./components/NavBar";
// import TabBar from "./components/TabBar";
import { asyncLoading } from 'vuejs-loading-plugin'
const config = require("./config.js");

export default {
  name: "App",
  components: {
    // NavBar
    // TabBar
  },
  data(){
    return{
      hasCookie: false,
      userAllreadyExists: false,
      userBlacklisted: false,
      userCheckFinish: false,
      itemsPutFinish: false,
      server_error:false
    }
  },
  mounted(){
    asyncLoading(this.checkParticipant());
    this.getCurrTime();

  },
  methods:{
    getImageURL(img){
        return require('./assets/'+img+'.png');
    },
    getCurrTime(){
      let time=new Date().getTime();
      localStorage.setItem('startTime',JSON.stringify(time));
    },
    async checkParticipant(){
      const participant_ID=JSON.parse(localStorage.getItem('participant_ID'));
      // if(partisipant_ID==null) return;
      let blacklistedResponse = null;
      let existsResponse = null;
      try {
        blacklistedResponse = await this.axios.get("http://"+config.data.server+"/isBlacklisted/participant_ID/"+participant_ID);
        existsResponse = await this.axios.get("http://"+config.data.server+"/userExists/participant_ID/"+participant_ID);
      } 
      catch (error) {
        this.server_error=true;
        console.log(error);
      }

      this.userBlacklisted=blacklistedResponse.data.blacklisted;
      this.userAllreadyExists=existsResponse.data.exists;
      this.userCheckFinish=true;
      await this.setConfigurations();
    },

    async setConfigurations(){
      if(JSON.parse(localStorage.getItem('items'))!=null){
        this.itemsPutFinish=true;
        return;
      }
      let servername=localStorage.getItem('server');
      let configs=null;
      try 
      {
        configs = await this.axios.get("http://"+config.data.server+"/config");
      } 
      catch (error) {
        console.log(error);
        this.server_error=true;
      }
      let items= configs.data.items_from_groups;
      let voting_method= configs.data.voting_method;
      localStorage.setItem('items',JSON.stringify(items));

      if(JSON.parse(localStorage.getItem('voting_method'))==null)
        localStorage.setItem('voting_method',voting_method);
    },

    async blacklistUser(){
      const participant_ID=JSON.parse(localStorage.getItem('participant_ID'));
      try {
        await this.axios.post("http://"+config.data.server+"/insertToBlacklist",{
          partisipant_ID:participant_ID
        });
      } 
      catch (error) {
        console.log(error);
        this.server_error=true;
      }
      
    },

    async addExperiment(){
            this.$loading(true);

            new Promise((resolve, reject) => {
                resolve(0);
            })
            .then(async ()=>{
                let participant_ID=localStorage.getItem("participant_ID");
                let time=localStorage.getItem("startTime");
                let tutorial_time=parseInt(localStorage.getItem("tutorial_finish"))-parseInt(localStorage.getItem("consent_finish"));
                let quiz_time=parseInt(localStorage.getItem("quiz_finish"))-parseInt(localStorage.getItem("tutorial_finish"));
                let response_time=parseInt(localStorage.getItem("budgeting_finish"))-parseInt(localStorage.getItem("budgeting_start"));
                let items=JSON.parse(localStorage.getItem("final_items"));
                let participant_info=JSON.parse(localStorage.getItem("participant_info"));
                // let servername=localStorage.getItem('server');
                try {
                    const experiment_id=await this.axios.post("http://"+config.data.server+"/addExperiment",{
                        participant_ID:participant_ID,
                        time:time,
                        tutorial_time:tutorial_time,
                        quiz_time:quiz_time,
                        response_time:response_time,
                        items:items,
                        participant_info:participant_info
                    });
                    localStorage.clear();
                    localStorage.setItem('experiment_id',experiment_id.data.experiment_id);
                } 
                catch (error) {
                    console.log(error);
                    this.server_error=true;
                }
            })
            .then(()=>{
                this.$loading(false);
            });
        }
  }
};
</script>

<style lang="scss">

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  min-height: 100vh;

  background-size: cover;
  background-image: url(./assets/background.jpg);
}
html {
    overflow-y: scroll; 
    }
</style>
