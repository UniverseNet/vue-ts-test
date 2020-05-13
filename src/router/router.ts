import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Beginner from '../views/Beginner.vue'
import Junior from '../views/Junior.vue'
import BeginnerCh1 from "@/components/BeginnerCh1.vue";
import BeginnerCh2 from "@/components/BeginnerCh2.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/beginner',
        component: Beginner,
        // component: () => import(/* webpackChunkName: "about" */ '../views/Beginner.vue'),
        children:[
            {
                path: '/ch1',
                component: BeginnerCh1,
            },
            {
                path: '/ch2',
                component: BeginnerCh2,
            },
        ]
    },
    {
        path: '/junior',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Junior,
    },
    {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
