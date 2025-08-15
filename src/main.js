import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/Styles.css'
const app = createApp(App)

app.use(router) // register router
app.mount('#app')
