import Vue from "vue";
import App from "./App.vue";
import "./assets/index.scss";
import Router from "vue-router";

import routes from "./route/router";

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({ routes: routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
