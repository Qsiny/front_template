import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// vue router
import router from '@/router/index';
// pinia
import store from '@/store';
// main.ts
import 'virtual:uno.css'


const app = createApp(App);

app.use(router).use(store);
