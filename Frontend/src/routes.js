import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";
import store from "./store"

const routes = [
  {
    path: "/participant_ID/:participant_ID",
    name: "main",
    beforeEnter: (to, from, next) => {
      const id = to.query.participant_ID;
      // store.commit('setParticipantID',id);
      localStorage.setItem('participant_ID',JSON.stringify(id));
      // alert(store.getState('participant_ID'));
      // alert(id);
      // alert(store.getters.getParticipantID);
      next()
    },
    // query: { participant_ID: 1114 },
    component: () => import("./components/TabBar")
  },
  // {
  //   path: "/participant_ID/:participant_ID",
  //   name: "tabs",
  //   // query: { participant_ID: 1114 },
  //   component: () => import("./components/TabBar")
  // },
  {
    path: "/Knapsack_exp",
    name: "Knapsack_exp",
    component: () => import("./components/Knapsack_exp")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/FavoritesPage")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("./pages/PersonalRecipesPage")
  },
  {
    path: "/family",
    name: "family",
    component: () => import("./pages/FamilyRecipesPage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage")
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeFullPage")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }

];

export default routes;
