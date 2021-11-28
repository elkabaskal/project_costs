import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Add from '../views/Add.vue'




Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: "Home",
        component: Home
    },

    {
        path: '/dashboard',
        name: "Dashboard",
        component: Dashboard,
        children: [{
            path: 'add',
            name: "Add",
            component: Add
        }]

    },

    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/notfound',
        name: "NotFound",
        component: NotFound,
    },
    {
        path: '*',
        redirect: '/notfound'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

/* const userIsAuth = true

router.beforeEach((to, from, next) => {
    if (to.name !== 'NotFound' && !userIsAuth) {
        next({
            name: 'NotFound'
        })
    } else {
        next()
    }
}) */

const getTitleByRoutes = routeName => {
    return {
        'Home': 'Welcome to App!',
        'Add': 'Entry of standing payments',
        'Dashboard': 'Take a look on your payments and add more!',
        'About': 'Anything about our awesome application!',
        'NotFound': 'Oops! Seems like we lost this page :('
    }[routeName]
}

router.afterEach((to) => {
    document.title = getTitleByRoutes(to.name)
})


export default router