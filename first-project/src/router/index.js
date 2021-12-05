import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: "Home",
        component: () =>
            import ( /*webpackChunkName: "Home" */ '../views/Home.vue'),
    },

    {
        path: '/dashboard',
        name: "Dashboard",
        component: () =>
            import ( /*webpackChunkName: "Dashboard" */ '../views/Dashboard.vue'),
        children: [{
            path: 'add',
            name: "Add",
            component: () =>
                import ( /*webpackChunkName: "Add" */ '../views/Add.vue'),
        }]

    },

    {
        path: '/about',
        name: "About",
        component: () =>
            import ( /*webpackChunkName: "About" */ '../views/About.vue')
    },
    {
        path: '/notfound',
        name: "NotFound",
        component: () =>
            import ( /*webpackChunkName: "NotFound" */ '../views/NotFound.vue')
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