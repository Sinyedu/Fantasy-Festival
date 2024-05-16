import { createRouter, createWebHistory } from 'vue-router'
import QuestView from '../views/QuestView.vue'
import FamilieView from '../views/FamilieView.vue'
import AftenView from '../views/AftenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quest',
      component: QuestView
    },
    {
      path: '/familie',
      name: 'familie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FamilieView
    },
    {
      path: '/aften',
      name: 'aften',
      component: AftenView
    }
  ]
})

export default router
