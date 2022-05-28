import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/Home',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
    },
    {
        path: '/About',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/Post/:id',
        name: 'Post',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
