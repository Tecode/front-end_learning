import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/product/home", name: "home", component: () => import(/* webpackChunkName: "group-home" */"./components/HelloWorld.vue") },
  { path: "/product/list", name: "list", component: () => import(/* webpackChunkName: "group-list" */"./views/product-list/list.vue") },
  { path: "/product/detail", name: "detail", component: () => import(/* webpackChunkName: "group-detail" */"./views/product-detail/index.vue") },
];

const router = new VueRouter({ routes, mode: "hash", base: "/product/home" });
export default router;
