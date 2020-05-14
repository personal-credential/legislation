import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/first/Intro'
import Condition from '@/components/conditions/Condition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    },
  ]
})
