import './assets/main.css';
import { createApp } from 'vue';
import TheNavbar from './components/TheNavbar.vue';
import App from './App.vue'

const app = createApp(App);
app.component('the-navbar', TheNavbar)
app.mount('#app')
