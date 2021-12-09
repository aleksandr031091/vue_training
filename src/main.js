import Vue from "vue";
import App from "./App.vue";
import "./assets/index.scss";
import Router from "vue-router";

import mainRoutes from "./routes/mainRouters";

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({ routes: mainRoutes, mode: "history" });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
