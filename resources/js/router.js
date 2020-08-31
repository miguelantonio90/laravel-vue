import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from './components/pages/Dashboard';
import UserList from './components/user/List'
import LoginPage from './components/login/Login';
import store from './store/index';

Vue.use(VueRouter);

function guard(to, from, next) {
    if (store.state.login.isLoggedIn === true) {
        // or however you store your logged in state
        next(); // allow to enter route
    } else {
        next('/login'); // go to '/login';
    }
}

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: guard,
        meta: {
            breadcrumb: [
                { name: 'dashboard' }
            ]
        }
    }, {
        path: '/users',
        name: 'UserList',
        component: UserList,
        beforeEnter: guard,
        meta: {
            breadcrumb: [
                { name: 'user-list' }
            ]
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: {
            allowAnonymous: true
        }
    }]
})
