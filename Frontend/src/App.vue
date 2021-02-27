<template>
  <div id="app">
    <router-view v-if='!userBlacklisted && !userAllreadyExists'></router-view>
    <div v-else-if='userBlacklisted' style="width:80%;padding-left: 25%;font-size: 50px;">
      <br><br>
      <b-alert show variant="danger">User failed to answer the quiz correctly and is now forbidden from participating</b-alert>
    </div>
    <div v-else-if='userAllreadyExists' style="width:80%;padding-left: 25%;font-size: 50px;">
      <br><br>
      <b-alert show variant="warning">User already participated in the experiment</b-alert>
    </div>

    <!-- <div v-if='userBlacklisted' style="width:80%;padding-left: 25%;font-size: 50px;">
      <br><br>
      <b-alert show variant="danger">User failed to answer the quiz correctly and is now forbidden from participating</b-alert>
    </div>
    <div v-else-if='!userAllreadyExists' style="width:80%;padding-left: 25%;font-size: 50px;">
      <br><br>
      <b-alert show variant="warning">User already participated in the experiment</b-alert>
    </div>
    <router-view v-else></router-view> -->
  </div>
</template>

<script>
// import NavBar from "./components/NavBar";
// import TabBar from "./components/TabBar";
import { asyncLoading } from 'vuejs-loading-plugin'
const config = require("./config.js");
console.log(config.data.server);

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
      // servername:localStorage.getItem('server')
    }
  },
  mounted(){
    // localStorage.setItem('server','3.9.16.135:3000');
    // localStorage.setItem('server','localhost:3000');
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
      console.log("start check participant");
      const participant_ID=JSON.parse(localStorage.getItem('participant_ID'));
      console.log('started checking');
      let blacklistedResponse = null;
      let existsResponse = null;
      // let configs = null;
      try {
        // console.log(servername);
        blacklistedResponse = await this.axios.get("http://"+config.data.server+"/isBlacklisted/participant_ID/"+participant_ID);
        existsResponse = await this.axios.get("http://"+config.data.server+"/userExists/participant_ID/"+participant_ID);
        console.log(blacklistedResponse);
        console.log(existsResponse);
      } catch (error) {
        console.log(error);
      }

      this.userBlacklisted=blacklistedResponse.data.blacklisted;
      this.userAllreadyExists=existsResponse.data.exists;
      this.userCheckFinish=true;
      await this.setConfigurations();
      // alert(participant_ID);
    },

    async setConfigurations(){
      console.log('started checking items');
      if(JSON.parse(localStorage.getItem('items'))!=null){
        this.itemsPutFinish=true;
        return;
      }
      let servername=localStorage.getItem('server');
      let configs=null;
      try {
        
        configs = await this.axios.get("http://"+config.data.server+"/config");
        console.log(configs);
      } catch (error) {
        console.log(111);
        // console.log(error);
      }
      let items= configs.data.items_from_groups;
      let voting_method= configs.data.voting_method;
      localStorage.setItem('items',JSON.stringify(items));
      localStorage.setItem('voting_method',voting_method);
      // this.$store.commit('setItems',items);
      // this.$store.commit('setStages',voting_methods);
    },

    async blacklistUser(){
      // const participant_ID=this.$store.getters.getParticipantID;
      const participant_ID=JSON.parse(localStorage.getItem('participant_ID'));
      // let servername=localStorage.getItem('server');
      await this.axios.post("http://"+config.data.server+"/insertToBlacklist",{
        partisipant_ID:participant_ID
      });
    }
  }
};
</script>

<style lang="scss">
// @import "@/scss/form-style.scss";

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
