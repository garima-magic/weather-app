import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Forecast from '../views/Forecast.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/forecast",
    name: "Forecast",
    component: Forecast
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
