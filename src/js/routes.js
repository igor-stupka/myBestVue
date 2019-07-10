import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import MainPage from './components/MainPage';
// import Gen from './components/Gen';
// import E404 from './components/E404';

import {store} from './store';


const routes = [
	// {
	// 	path: '',
	// 	redirect: {name: 'mainPage'}
	// },
	// {
	// 	name: 'mainPage',
	// 	path: '/main',
	// 	component: MainPage
	// },
	// {
	// 	name: 'Gen',
	// 	path: '/generated',
	// 	component: Gen,
	// 	beforeEnter(from, to, next) {
	// 		store.dispatch('table/loadItems');
	// 		store.dispatch('table/loadSimpleText');
	// 		next();
	// 	}
	// },
	// {
	// 	path: '*',
	// 	component: E404
	// }
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});