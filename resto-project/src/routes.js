import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/restaurants/Home.vue';
import SignUp from './components/auth/SignUp.vue';
import SignIn from './components/auth/SignIn.vue';
import Created from './components/restaurants/Created.vue';
import Updated from './components/restaurants/Updated.vue';

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
        path: '/update/:id',
        name: 'UpdatedPage',
        component: Updated,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;