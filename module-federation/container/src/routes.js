import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "foo", component: () => import("auth/MainComponent") },
  { path: "/bar", name: "bar", component: () => import("product/HelloWorld") },
  { path: "/authChild", name: "authChild", component: () => import("product/ProductApp") },
];

const router = new VueRouter({ routes, mode: "hash" });
export default router;
