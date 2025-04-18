import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import 'echarts';
import ECharts from 'vue-echarts';
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.component('vue-echarts', ECharts)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif