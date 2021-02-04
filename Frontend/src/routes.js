import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/participant_ID",
    name: "main",
    component: () => import("./components/TabBar")
  },
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
