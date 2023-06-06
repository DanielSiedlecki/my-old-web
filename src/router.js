import Home from './components/Home.vue';
import SkillsSection from './components/SkillsSection.vue';
import WorkAndEducationSection from './components/WorkAndEducationSection.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Footer from './components/FooterComponent.vue'
import OpinionsSection from './components/OpinionsSection.vue'



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
    path: '/Footer',
    name: 'Footer',
    component: Footer,
    meta: { title: 'Footer,' }
  },
  {
    path: '/Opinions',
    name: 'Opinions',
    component: OpinionsSection,
    meta: { title: 'Opinions,,' }
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