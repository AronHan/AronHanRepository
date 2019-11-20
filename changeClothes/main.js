import Vue from 'vue'
import App from './App'
const http=require('./utils/http.js')
Vue.prototype.http=http
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
