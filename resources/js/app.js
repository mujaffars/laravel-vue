import './bootstrap';
import 'admin-lte/plugins/jquery/jquery.min.js';

import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';

import 'admin-lte/dist/js/adminlte.min.js';

import Vue from 'vue';
import { VueRouter, createWebHistory } from 'vue-router';

// Import your Vue components
import Home from './components/Home.vue';
// import About from './components/About.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    router
}).$mount('#app');
