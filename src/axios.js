import axios, { toFormData } from "axios";
import moment from 'moment';

const axiosInstance = axios.create({
    baseURL: 'https://ednet.gogo.vc',
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
    },
})

const getToday = () => {
    return moment(Date.now()).toISOString();
};

const addToken = async () => {
    let token = await localStorage.getItem('token');
    axiosInstance.defaults.headers.common['Authorization'] = 'Token ' + token;
}

const removeToken = async () => {
    
}

export default {
    register (data) {
        return axiosInstance.post('/api/register/', {
            "first_name": data.first_name,
            "last_name": data.last_name,
            "phone" : data.phone
        })
    },

    phoneSendCode (phone) {
        return axiosInstance.post ('/api/register/phone/send-code/', {
            "phone": phone
        })
    },

    phoneCheckCode (phone, code) {
        return axiosInstance.post('/api/register/phone/check-code/', {
            "phone": phone,
            "code": code
        })
    },

    async checkRegister (phone) {
        // return axiosInstance.post('/api/register/phone/send-code/', {
        //     "phone": phone
        // })
    },

    logIn (phone) {
        return axiosInstance.post('/api/auth/phone/send-code/', {
            "phone": phone
        })
    },

    checkLogInCode (phone, code) {
        return axiosInstance.post('/api/auth/phone/check-code/', {
            "phone": phone,
            "code": code
        })
    },

    getStories (isActive, limit, offset) {
        return axiosInstance.get('/stories', {
            is_active: isActive,
            // limit,
            // offset
        })
    },

    getCourses (limit, offset, title) {
        return axiosInstance.get('/courses', {
            limit,
            offset,
            title
        })
    },

    startView (story_id, item_id) {
        axiosInstance.post(`/stories/${story_id}/items/${item_id}/start-view/`, {
            'start_view_at': getToday(),
        })
    }
}