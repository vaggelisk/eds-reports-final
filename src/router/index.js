import Vue from 'vue'
import Router from 'vue-router'
import Edsreports from '@/components/edsreports'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: {
        name: "Edsreports"
      }
    },
    {
      path: '/edsreports',
      name: 'Edsreports',
      component: Edsreports
    },
  ]
})
