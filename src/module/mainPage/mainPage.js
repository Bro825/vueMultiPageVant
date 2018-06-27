import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vant from 'vant';
import { RadioGroup, Radio } from 'vant';
import 'vant/lib/vant-css/index.css';

import notice from './components/notice';
import selectCar from './components/selectCar';



Vue.use(Vant);
Vue.use(VueRouter);

Vue.use(RadioGroup);
Vue.use(Radio);
/* eslint-disable no-new */

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/', component: notice },
        { path: '/selectCar', component: selectCar }
    ]
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})