import Home from './components/Home.vue';
import SkillsSection from './components/SkillsSection.vue';
import { createRouter, createWebHistory } from 'vue-router';


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
  }
];

const router = createRouter({
    history: createWebHistory(),
  routes
});

export default router;