import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import SignupPage from '../components/pages/SignupPage.vue'
import DetailPage from '../components/pages/DetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/signup', name: 'signup', component: SignupPage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/recipe/:id', name: 'detailPage', component: DetailPage },
  ]
})

export default router
