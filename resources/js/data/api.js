import axios from "axios";
import { getToken } from "../data/localStorage";


const login = (username, password) => {
    return post('/api/v1/login', {
        username: username,
        password: password
    });
}

const post = (url, creds) => {
    return axios.post(url, creds, {
        headers: {
            Authorization: getToken()
        }
    });
}
const get = (url) => {
    return axios.get(url, {
        headers: {
            Authorization: getToken()
        }
    });
}
const remove = (url, creds) => {
    return axios.delete(url, creds, {
        headers: {
            Authorization: getToken()
        }
    });
}
const put = (url, creds) => {
    return axios.put(url, creds, {
        headers: {
            Authorization: getToken()
        }
    });
}

/**User API */
const fetchUsers = () => {
    return get('/api/v1/users')
}

const createUser = (user) => {
    return post('/api/v1/users', user)
}

const updateUser = (user) => {
    return put('/api/v1/users/' + user.id, user)
}

const deleteUser = (userId) => {
    return remove('/api/v1/users/' + userId)
}

//Register the methods
export default {
    login: login,
    fetchUsers: fetchUsers,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}
