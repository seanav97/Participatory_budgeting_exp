<template>
  <div id="app">
    <div v-if='userBlacklisted' style="width:80%;padding-left: 25%;font-size: 50px;">
      <br><br>
      <b-alert show variant="danger">User failed to answer the quiz correctly and is now forbidden from participating</b-alert>
    </div>
    <div v-else-if='!userAllreadyExists' style="width:80%;padding-left: 25%;font-size: 50px;">
      <br><br>
      <b-alert show variant="warning">User already participated in the experiment</b-alert>
    </div>
    <router-view v-else></router-view>
    <!-- <div v-else style="width:80%;padding-left: 25%;font-size: 50px;">
      <br><br>
      <b-alert show variant="danger">User failed to answer the quiz correctly and is now forbidden from participating</b-alert>
    </div> -->
    
    <!-- <h1 style="text-align: center" v-else> User failed to answer the quiz and is now forbidden to participate</h1> -->
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
      userBlacklisted: false
    }
  },
  mounted(){
    const items=JSON.parse(localStorage.getItem('items'));
    if(items==null){
      alert('just check');
      asyncLoading(this.checkParticipant(),this.$parent.setConfigurations()).then().catch();
    }
    else{
      // alert('nothing');
      asyncLoading(this.checkParticipant()).then().catch();
    }
    this.getCurrTime();
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
        // alert(blacklistedResponse.data.blacklisted);
      } catch (error) {
        // console.log('blacklist eror');
      }
      try {
        existsResponse = await this.axios.get("http://localhost:3000/userExists/participant_ID/"+participant_ID+"/senario/island");
        
      } catch (error) {
          // console.log('exist eror');
      }
      

      let allreadyDidExp=existsResponse.data.exists;
      let isBlacklisted=blacklistedResponse.data.blacklisted;

      // console.log(isBlacklisted);
      this.userBlacklisted=isBlacklisted;
      this.userAllreadyExists=existsResponse;
      // alert(participant_ID);
    },

    async setConfigurations(){
      let configs = await this.axios.get("http://localhost:3000/config/stages/2");
      let items= configs.data.items_from_groups;
      localStorage.setItem('items',JSON.stringify(items));
      let voting_methods= configs.data.voting_methods;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;

  background-size: cover;
  background-image: url(./assets/background.jpg);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
