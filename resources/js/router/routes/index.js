import Dashboard from '../../components/pages/Dashboard'
import UserList from '../../components/user/List'
import LoginPage from '../../components/login/Login'
import store from '../../store'

function guard (to, from, next) {
  if (store.state.login.isLoggedIn === true) {
    // or however you store your logged in state
    next() // allow to enter route
  } else {
    next('/login') // go to '/login';
  }
}

const Routes = [{
  path: '/',
  name: 'Dashboard',
  component: Dashboard,
  beforeEnter: guard,
  meta: {
    breadcrumb: [
      { name: 'Home' }
    ]
  }
}, {
  path: '/users',
  name: 'Customers',
  component: UserList,
  beforeEnter: guard,
  meta: {
    breadcrumb: [
      { name: 'Customers' }
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

export default Routes
