import api from "../data/api";
import router from '../router';

const USER_ENABLED = true;
const SWITCH_USER_NEW_MODAL = 'SWITCH_USER_NEW_MODAL';
const SWITCH_USER_EDIT_MODAL = 'SWITCH_USER_EDIT_MODAL';
const USER_CREATED = 'USER_CREATED';
const USER_EDIT = 'USER_EDIT';
const USER_UPDATED = 'USER_UPDATED';
const USER_DELETED = 'USER_DELETED';
const USER_TABLE_LOADING = 'USER_TABLE_LOADING';
const FAILED_USER = 'FAILED_USER';
const FETCHING_USERS = 'FETCHING_USERS';
const ENV_DATA_PROCESS = 'ENV_DATA_PROCESS';

const state = {
    showNewModal: false,
    showEditModal: false,
    newUser: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        nid: '',
        sexo: '',
        birthday: '',
        age: '',
        race: '',
        sons: '',
        salary: '',
        position: '',
        roles: [],
        type: 'user'
    },
    editUser: {
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        nid: '',
        sexo: '',
        birthday: '',
        age: '',
        race: '',
        sons: '',
        salary: '',
        position: '',
        roles: []
    },
    users: [],
    userTableColumns: [
        {
            text: 'First Name',
            value: 'firstName',
        },
        {
            text: 'Last Name',
            value: 'lastName',
        },
        {
            text: 'Username',
            value: 'username'
        }, {
            text: 'Email',
            value: 'email'
        },
        {
            text: 'Position',
            value: 'position'
        },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    isTableLoading: false,
    sexoItems: [
        { value: 'female', text: 'Female' },
        { value: 'male', text: 'Male' }
    ],
    raceItems: [
        { value: 'white', text: 'White' },
        { value: 'black', text: 'Black' },
        { value: 'yellow', text: 'Yellow' },
        { value: 'half-blood', text: 'Half Blood' }
    ],
    userRoles: [{
        value: 'ROLE_USER',
        label: 'USER'
    }, {
        value: 'ROLE_SUPER_ADMIN',
        label: 'ADMINISTRATOR'
    }]
};

// getters
const getters = {
};

// actions
const actions = {
    toogleNewModal({ commit }, showModal) {
        commit(SWITCH_USER_NEW_MODAL, showModal);
    },
    toogleEditModal({ commit }, showModal) {
        commit(SWITCH_USER_EDIT_MODAL, showModal);
    },
    openEditModal({ commit }, userId) {
        commit(SWITCH_USER_EDIT_MODAL, true);
        commit(USER_EDIT, userId);
    },
    async getUsers({ commit }) {
        commit(USER_TABLE_LOADING, true);
        await api
            .fetchUsers()
            .then(({ data }) => commit(FETCHING_USERS, data))
            .then(() => commit(USER_TABLE_LOADING, false))
            .catch(error => commit(FAILED_USER, error));
    },
    async createUser({ commit, dispatch }) {
        commit(ENV_DATA_PROCESS, true);
        await api
            .createUser(state.newUser)
            .then(() => commit(USER_CREATED))
            .then(() => commit(ENV_DATA_PROCESS, false))
            .then(() => dispatch('user/getUsers', null, { root: true }))
            .catch(error => commit(FAILED_USER, error));
    },
    async updateUser({ commit, dispatch }) {
        commit(ENV_DATA_PROCESS, true);
        await api
            .updateUser(state.editUser)
            .then(() => commit(USER_UPDATED))
            .then(() => commit(ENV_DATA_PROCESS, false))
            .then(() => dispatch('user/getUsers', null, { root: true }))
            .catch(error => commit(FAILED_USER, error));

    },
    async deleteUser({ commit, dispatch }, userId) {
        await api
            .deleteUser(userId)
            .then(() => commit(USER_DELETED))
            .then(() => dispatch('user/getUsers', null, { root: true }))
            .catch(error => commit(FAILED_USER, error));
    }
};

// mutations
const mutations = {
    [SWITCH_USER_NEW_MODAL](state, showModal) {
        state.showNewModal = showModal;
    },
    [SWITCH_USER_EDIT_MODAL](state, showModal) {
        state.showEditModal = showModal;
    },
    [USER_TABLE_LOADING](state, isLoading) {
        state.isUserTableLoading = isLoading;
    },
    [FETCHING_USERS](state, users) {
        state.users = users;
    },
    [ENV_DATA_PROCESS](state, isActionInProgress) {
        this._vm.$Progress.start()
        state.isActionInProgress = isActionInProgress;
    },
    [FAILED_USER](state, error) {
        this._vm.$Toast.fire({
            icon: 'error',
            title: error
        })
    },
    [USER_CREATED](state) {
        state.showNewModal = false;
        state.newUser = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            nid: '',
            sexo: '',
            birthday: '',
            age: '',
            race: '',
            sons: '',
            salary: '',
            position: '',
            roles: [],
            type: 'user'
        };
        this._vm.$Toast.fire({
            icon: 'success',
            title: 'User created successfully'
        })
    },
    [USER_EDIT](state, userId) {
        state.editUser = Object.assign({}, state.users
            .filter(node => node.id === userId)
            .shift()
        );
    },
    [USER_UPDATED](state) {
        state.showEditModal = false;
        state.editUser = {
            id: '',
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            nid: '',
            sexo: '',
            birthday: '',
            age: '',
            race: '',
            sons: '',
            salary: '',
            position: '',
            roles: [],
            type: 'user'
        };

        this._vm.$Toast.fire({
            icon: 'success',
            title: 'User has been updated'
        })
    },
    [USER_DELETED](state) {
        this._vm.$Toast.fire({
            icon: 'success',
            title: 'User has been deleted'
        })
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
