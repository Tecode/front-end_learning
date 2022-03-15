import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  // constructLayoutEngine,
} from "single-spa-layout";

// 获取路由配置对象
const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    console.log(name, '-name');
    return System.import(name);
  },
});
// const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
// layoutEngine.activate();
start({
  urlRerouteOnly: true,
});
