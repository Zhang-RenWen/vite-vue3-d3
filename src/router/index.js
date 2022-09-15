import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    meta: {
      title: "home",
    },
  },
  {
    path: "/d3",
    name: "d3",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/d3/index.vue"),
    meta: {
      title: "d3",
    },
  },
  {
    path: "/Bar1",
    name: "Bar1",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Charts/Bar/Bar1.vue"),
    meta: {
      title: "d3",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = "D3 | " + to.meta.title;
  }
  next();
});
export default router;
