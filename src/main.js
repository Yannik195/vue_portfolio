import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Element from "element-ui"

import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Lebenslauf from "./components/Lebenslauf.vue"
import Portfolio from "./components/Portfolio.vue"
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueRouter);
Vue.use(Element);

const routes = [
  { path: "/", component: AboutMe },
  { path: "/skills", component: Skills },
  { path: "/portfolio", component: Portfolio },
  { path: "/resume", component: Lebenslauf }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
