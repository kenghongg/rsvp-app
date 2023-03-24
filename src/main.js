import { createApp } from 'vue'
import { registerPlugins } from './plugins'
import VueMeta from 'vue-meta'
import App from './App.vue'

const app = createApp(App)

registerPlugins(app)

app.use(VueMeta.default)

app.mount('#app')
