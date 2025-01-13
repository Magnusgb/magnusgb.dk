import { createRouter, createWebHistory } from 'vue-router';
import HomePages from './components/pages/HomePages.vue'; 
import about from './components/pages/about.vue';
import ProjectView from './components/pages/ProjectView.vue';

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: HomePages,
  },
  {
    path: '/project/:id',  // Dynamisk rute for hvert projekt
    name: 'ProjectView',
    component: ProjectView,  // Komponent, der håndterer visningen af projektet
    props: true  // Sørger for at id bliver sendt som en prop til komponenten
  },
  {
    path: '/about', 
    name: '',
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
