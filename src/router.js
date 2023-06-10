import Home from './components/Home.vue';
import SkillsSection from './components/SkillsSection.vue';
import WorkAndEducationSection from './components/WorkAndEducationSection.vue'
import { createRouter, createWebHistory } from 'vue-router';
import OpinionsSection from './components/OpinionsSection.vue'
import ContactSection from './components/ContactSection.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Strona główna' }
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: SkillsSection,
    meta: { title: 'Skills' }
  },
  {
    path: '/Work&Education',
    name: 'Work&Education',
    component: WorkAndEducationSection,
    meta: { title: 'Work&Education,' }
  },
  
  {
    path: '/Opinions',
    name: 'Opinions',
    component: OpinionsSection,
    meta: { title: 'Opinions' }
  },

  {
    path: '/Contact',
    name: 'Contact',
    component: ContactSection,
    meta: { title: 'Contact,' }
  },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'exact-active-link',
  routes
});


router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router;