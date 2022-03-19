import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "foo", component: () => import(/* webpackChunkName: "group-foo" */"auth/MainComponent") },
  { path: "/bar", name: "bar", component: () => import(/* webpackChunkName: "group-bar" */"product/HelloWorld") },
  { path: "/product/:name", name: "authChild", component: () => import(/* webpackChunkName: "group-authChild" */"./components/Product.vue") },
];

const router = new VueRouter({ routes, mode: "hash" });
export default router;
