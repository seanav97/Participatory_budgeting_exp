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
    path: "/k-approval_exp",
    name: "k-approval_exp",
    component: () => import("./components/k-approval_exp")
  },
  {
    path: "/Threshold_exp",
    name: "Threshold_exp",
    component: () => import("./components/Threshold_exp")
  },
  {
    path: "/Knapsack_exp",
    name: "Knapsack_exp",
    component: () => import("./components/Knapsack_exp")
  },
  {
    path: "/Utilities_exp",
    name: "Utilities_exp",
    component: () => import("./components/Utilities_exp")
  },
  {
    path: "/Ranking_value_exp",
    name: "Ranking_value_exp",
    component: () => import("./components/Ranking_value_exp")
  },
  {
    path: "/Ranking_value_money_exp",
    name: "Ranking_value_money_exp",
    component: () => import("./components/Ranking_value_money_exp")
  },
  {
    path: "/Consistency",
    name: "Consistency",
    component: () => import("./components/Consistency")
  },
  // {
  //   path: "*",
  //   name: "notFound",
  //   component: NotFound
  // }

];

export default routes;
