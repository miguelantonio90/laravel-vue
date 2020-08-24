import Api from "../data/api";
import { getToken, removeToken, saveToken } from "../data/localStorage";
import router from '../router';

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const SET_USERNAME = 'SET_USERNAME'
const SET_PASSWORD = 'SET_PASSWORD'

const state = {
    isLoggedIn: !!getToken(),
    pending: false,
    loading: false,
    error: false,
    showResult: false,
    result: '',
    auth: {
        username: '',
        password: ''
    }
};

// getters
const getters = {
    isLoggedIn: state => {
        return state.isLoggedIn
    }
};

// actions
const actions = {
    async login({ commit }) {
        commit(LOGIN);
        await Api
            .login(state.auth.username, state.auth.password)
            .then(jsonResponse => {
                saveToken(jsonResponse.headers.authorization);
                commit(LOGIN_SUCCESS);
                router.push('/')
            });
    },
    async logout({ commit }) {
        commit(LOGOUT);
        await removeToken();
        router.push('/login')
    }
};

// mutations
const mutations = {
    [LOGIN](state) {
        state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
        state.isLoggedIn = true;
        state.pending = false;
    },
    [LOGOUT](state) {
        state.isLoggedIn = false;
    },
    [SET_USERNAME](state, username) {
        state.username = username;
    },
    [SET_PASSWORD](state, password) {
        state.password = password;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
