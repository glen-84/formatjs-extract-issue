import { createApp } from 'vue'
import {createIntl} from 'vue-intl'
import App from './App.vue'

createApp(App).use(createIntl({defaultLocale: "en-GB", locale: "en-GB"})).mount('#app')
