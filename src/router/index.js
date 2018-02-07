import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Survey from '@/components/Survey'
// TODO: Import the Secret component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    {
      path: '/survey',
      name: 'Survey',
      component: Survey,
    }
    // Add the Secret route definition
  ]
})
