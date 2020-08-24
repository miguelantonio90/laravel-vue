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

//Register the methods
export default {
    get: get,
    post: post,
    login: login
}