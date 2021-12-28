import AppHome from './components/AppHome.vue';
import AppAbout from './components/AppAbout.vue';
import AppMyInfo from './components/AppMyInfo.vue';
import AppList from './components/AppList.vue';

import AppError from './components/AppError.vue';


import AppTsDemo from './components/AppTsDemo.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
	{
        path: '/about',
        name: 'About',
        component: AppAbout
    },
	{
        path: '/tsdemo',
        name: 'Vue + TypeScript',
        component: AppTsDemo
    },
    {
        path: '/myinfo',
        name: 'Per Steen Olsen',
        component: AppMyInfo
    },
	{
        path: '/employee',
        name: 'Web API',
        component: AppList
    },
	{
        path: '/*',
        name: 'Secret',
        component: AppError
    }
];

export default routes;