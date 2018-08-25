import Vue from 'vue';
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App';
import './permission'; // 权限
import './errorLog'; // 错误日志
import router from './router/router';
import store from './store';
import {
    loadStyle
} from './util/util'
import * as filters from './filters' // 全局filter
import '@/styles/common.scss';
import basicContainer from './components/basic-container/main'
import VueClipboard from 'vue-clipboard2'
// 插件 json 展示
import vueJsonTreeView from 'vue-json-tree-view'

Vue.use(VueClipboard)

Vue.use(vueJsonTreeView)

Vue.use(VueAxios, axios)

Vue.component('basicContainer', basicContainer)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

loadStyle('@/styles/font.scss');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')