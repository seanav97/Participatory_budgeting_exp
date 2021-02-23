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
    path: "/ApprovalVoting_exp",
    name: "ApprovalVoting_exp",
    component: () => import("./components/ApprovalVoting_exp")
  },
  {
    path: "/ThresholdApproval_exp",
    name: "ThresholdApproval_exp",
    component: () => import("./components/ThresholdApproval_exp")
  },
  {
    path: "/Knapsack_exp",
    name: "Knapsack_exp",
    component: () => import("./components/Knapsack_exp")
  },
  {
    path: "/Preferences_exp",
    name: "Preferences_exp",
    component: () => import("./components/Preferences_exp")
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
