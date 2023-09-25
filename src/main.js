import './assets/main.css';
import { createApp } from 'vue';
import BaseCard from './components/UI/BaseCard.vue'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/pages/Login.vue';
import Home from './components/pages/Home.vue'
import store from './components/store/authStore';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/login', component: Login
    },
  ]
})

const app = createApp(App);
app.component('base-card', BaseCard)
app.use(router)
app.use(store)

app.mount('#app')
