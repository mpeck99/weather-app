import { createApp } from 'vue'
import App from './App.vue'

import InlineSvg from 'vue-inline-svg'

createApp(App).mount('#app')
createApp.component('inline-svg', InlineSvg);