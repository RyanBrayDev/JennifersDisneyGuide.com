import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Disneyland from '@/components/Disneyland'
import CaliforniaAdventure from '@/components/CaliforniaAdventure'
import DowntownDisney from '@/components/DowntownDisney'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/california-adventure',
      name: 'CaliforniaAdventure',
      component: CaliforniaAdventure
    },
    {
      path: '/disneyland',
      name: 'Disneyland',
      component: Disneyland
    },
    {
      path: '/downtown-disney',
      name: 'DowntownDisney',
      component: DowntownDisney
    }
  ]
})
