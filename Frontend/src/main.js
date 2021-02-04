import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";

import {shared_data} from "./shared_data";
Vue.prototype.$store=shared_data;


import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";




import routes from "./routes";
import VueRouter from "vue-router";

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

//Global components
import RecipePreview from "./components/RecipePreview";
import store from "./store"
Vue.component("RecipePreview", RecipePreview);
import Login from "./components/Login";
Vue.component("Login", Login);

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

// import VueApexCharts from "vue3-apexcharts";
import Element from 'element-ui'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import VueFormWizard from 'vue-form-wizard';
import ScrollFixedHeader from 'vuejs-scroll-fixed-header';
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import VueApexCharts from "vue-apexcharts";


// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import "element-theme-default";

import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);
Vue.use(ScrollFixedHeader);
Vue.use(Vuex);

Vue.use(VueApexCharts);
Vue.use(VueFormWizard)
Vue.use(Element)


axios.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function(response) {
      // Do something with response data
      return response;
    },
    function(error) {
      // Do something with response error
      return Promise.reject(error);
    }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;


router.push('/participant_ID?participant_ID=1112')

new Vue({
  store: store,
  router,
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000
      });
    }
  },
  render: (h) => h(App)
}).$mount("#app");

