import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
/* eslint-disable no-new */


new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})