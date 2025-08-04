import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import Created from './components/Created.vue';
import Updated from './components/Updated.vue';

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: Home,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/create',
        name: 'CreatedPage',
        component: Created,
    },
    {
        path: '/update',
        name: 'UpdatedPage',
        component: Updated,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;