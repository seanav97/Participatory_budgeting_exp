import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/participant_ID/:participant_ID",
    name: "main",
    beforeEnter: (to, from, next) => {
      const id = to.query.participant_ID;
      localStorage.setItem('participant_ID',id);
      next()
    },
    component: () => import("./components/TabBar")
  },
  {
    path: "/Knapsack_exp",
    name: "Knapsack_exp",
    component: () => import("./components/Knapsack_exp")
  },
  {
    path: "/Consistency",
    name: "Consistency",
    component: () => import("./components/Consistency")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }

];

export default routes;
