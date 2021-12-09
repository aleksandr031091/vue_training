import HomePage from "../pages/home_page/HomePage.vue";
import MapPage from "../pages/map_page/MapPage.vue";
import AbautPage from "../pages/abaut_page/AbautPage.vue";

const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    props: true,
  },
  {
    path: "/map",
    name: "map",
    component: MapPage,
    props: true,
  },
  {
    path: "/abaut",
    name: "abaut",
    component: AbautPage,
    props: true,
  },
];

export default mainRoutes;
