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
      itemsPutFinish: false
    }
  },
  mounted(){
    console.log('mount');
    asyncLoading(this.checkParticipant(),this.setConfigurations());
    // this.$loading(true);
    // this.checkParticipant();
    // this.setConfigurations();
    this.getCurrTime();
    // while(!this.userCheckFinish || !this.itemsPutFinish){let x=0;}
    // this.$loading(false);
    // console.log('mount');
    // const items=JSON.parse(localStorage.getItem('items'));
    // if(items==null){
    //       asyncLoading(this.setConfigurations()).then().catch();
    // }
    // asyncLoading(this.checkParticipant()).then().catch();
    // this.getCurrTime();
    // new Promise((resolve,reject)=>{
    //   this.$loading(true);
    //   const items=JSON.parse(localStorage.getItem('items'));
    //   if(items==null){
    //     // asyncLoading(this.checkParticipant(),this.setConfigurations()).then().catch();
    //     this.setConfigurations();
    //   }
    //     this.checkParticipant();
    //     // asyncLoading(this.checkParticipant()).then().catch();
    //   resolve();
    // })
    // .then(()=>{
    //   this.$loading(false);
    // })
    
    // if(items==null){
    //   // asyncLoading(this.checkParticipant(),this.setConfigurations()).then().catch();
    //   await this.checkParticipant();
    //   await this.setConfigurations();
    // }
    // else{
    //   await this.checkParticipant();
    //   // asyncLoading(this.checkParticipant()).then().catch();
    // }
    // await this.getCurrTime();
    // this.$loading(false);

  },
  methods:{
    getCurrTime(){
      let time=new Date().getTime();
      localStorage.setItem('startTime',JSON.stringify(time));
    },
    async checkParticipant(){
      const participant_ID=JSON.parse(localStorage.getItem('participant_ID'));
      console.log('started checking');
      let blacklistedResponse = null;
      let existsResponse = null;
      try {
        blacklistedResponse = await this.axios.get("http://localhost:3000/isBlacklisted/participant_ID/"+participant_ID);
        existsResponse = await this.axios.get("http://localhost:3000/userExists/participant_ID/"+participant_ID);
      } catch (error) {
        // console.log('blacklist eror');
      }

      this.userBlacklisted=blacklistedResponse.data.blacklisted;
      this.userAllreadyExists=existsResponse.data.exists;
      this.userCheckFinish=true;
      // alert(participant_ID);
    },

    async setConfigurations(){
      console.log('started checking items');
      if(JSON.parse(localStorage.getItem('items'))!=null){
        this.itemsPutFinish=true;
        return;
      }
      let configs = await this.axios.get("http://localhost:3000/config");
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
      await this.axios.post("http://localhost:3000/insertToBlacklist",{
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
</style>
