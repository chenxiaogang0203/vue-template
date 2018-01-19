//常用依赖，分享sdk，webview
require('../common/js/base')


import Vue from 'vue'
import App from './App'
import router from '../router'
import store from '../store'
import FastClick from 'fastclick'
import CONST from '../const'


Vue.config.productionTip = false;
//Vue和axios默认设置
//Vue.config.devtools = false

new Vue({
    el: '#app',
    mounted(){
        FastClick.attach(document.body);
    },
    router,
    store,
    template: '<App/>',
    components: {App}
})
