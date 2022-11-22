import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { LmgUtil } from './utils/imgUtil'
LmgUtil.loadAllLmg()
createApp(App).mount('#app')
