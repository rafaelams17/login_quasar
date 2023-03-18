const routes = [
  {
    path: "/",
    component: () => import("pages/LoginPage.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
