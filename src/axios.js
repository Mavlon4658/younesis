import axios, { toFormData } from "axios";
import moment from 'moment';
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: 'https://ednet.gogo.vc',
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
    },
})

const getToday = function () {
    return moment(Date.now()).toISOString();
};

function getToken ()  {
    return localStorage.getItem('token');
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

    getStories (isActive) {
        return axiosInstance.get('/stories', {
            is_active: isActive,
        })
    },

    startView (story_id, item_id) {
        return axiosInstance.post(`/stories/${story_id}/items/${item_id}/start-view/`, {
            'start_view_at': getToday()
        }, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
            }
        })
    },

    endView (story_id, item_id) {
        return axiosInstance.post(`/stories/${story_id}/items/${item_id}/end-view/`, {
            'end_view_at': getToday()
        }, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
            }
        })
    },

    getCourses (limit, offset, title) {
        return axiosInstance.get('/courses', {
            limit,
            offset,
            title
        })
    },

    myCourses (entrollment_type, limit = 20, offset = 0) {
        return axiosInstance.get(`/lms/courses/my/?entrollment_type=${entrollment_type}&limit=${limit}&offset=${offset}`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
            }
        })
    },

    marketplace (limit = 20, offset = 0) {
        return axiosInstance.get(`/lms/courses/?limit=${limit}&offset=${offset}`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
            }
        })
    },
}