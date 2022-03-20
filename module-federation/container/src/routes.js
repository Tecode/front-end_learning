import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/product/:name", name: "authChild", component: () => import(/* webpackChunkName: "group-authChild" */"./components/Product.vue") },
  { path: "/", name: "foo", component: () => import(/* webpackChunkName: "group-foo" */"auth/MainComponent") },
  { path: "/bar", name: "bar", component: () => import(/* webpackChunkName: "group-bar" */"product/HelloWorld") },
];

const router = new VueRouter({ routes, mode: "history" });
export default router;
