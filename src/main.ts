import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
console.log('env----username',import.meta.env.VITE_username)
console.log('env----age',import.meta.env.VITE_age)

createApp(App).mount('#app')
