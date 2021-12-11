import HomePage from "../pages/home_page/HomePage.vue";
import MapPage from "../pages/map_page/MapPage.vue";
import AbautPage from "../pages/abaut_page/AbautPage.vue";
import ErrorPage from "../pages/error_page/ErrorPage.vue";
import ContactPage from "../pages/contact_page/ContactPage.vue";

const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    // props: true,
  },
  {
    path: "/map",
    name: "map",
    component: MapPage,
  },
  {
    path: "/abaut",
    name: "abaut",
    component: AbautPage,
  },
  {
    path: "/contact/:id",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "*",
    component: ErrorPage,
  },
];

export default mainRoutes;
