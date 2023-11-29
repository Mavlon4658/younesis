import axios from "axios";

const baseURL = 'https://ednet.gogo.vc';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
    },
})

export default {
    getStories (isActive, limit, offset) {
        return axiosInstance.get('/stories', {
            is_active: isActive,
            limit,
            offset
        })
    },

    getCourses (limit, offset, title) {
        return axiosInstance.get('/courses', {
            limit,
            offset,
            title
        })
    }
}