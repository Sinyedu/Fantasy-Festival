import { createRouter, createWebHistory } from 'vue-router'
import QuestView from '../views/QuestView.vue'
import FamilieView from '../views/FamilieView.vue'
import AftenView from '../views/AftenView.vue'
import getQuestsItems from '@/modules/getQuest'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quest',
      component: QuestView,
      meta: { title: 'Hjem' }
    },
    {
      path: '/familie',
      name: 'familie',
      component: FamilieView,
      meta: { title: 'Familie Quest' }
    },
    {
      path: '/aften',
      name: 'aften',
      component: AftenView
    },
    {path: '/',
    name: 'faq',
    component: QuestView,
  }
  ]
})





router.beforeEach((to, from, next) => {
  if (to.meta.dynamicTitle && to.params.id) {
    const fantasyTitle = getQuestsItems()
      .projectItems.value.find(item => item.id === to.params.id);
      
    if (fantasyTitle) {
      document.title = `Fantasy Quest | ${fantasyTitle.title}`;
    } else {
      document.title = `Fantasy Quest | ${to.meta.title}`;
    }
  } else {
    document.title = `Fantasy Quest | ${to.meta.title}`;
  }
  next();
});

export default router;