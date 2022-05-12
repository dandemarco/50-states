import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound'
import StatesVisited from '@/components/StatesVisited'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/:pathMatch(.*)*',   //match anything that's not one of the previous routes
            name: 'NotFound',
            component: NotFound
        },

        //LAB: update the router configuration to create a new route to the states visited page. You can use the URL path of your choice.
        {
            path: '/visited',   
            name: 'StatesVisited',
            component: StatesVisited
        },
    ]
})
