import { createStore } from 'vuex';
import axios from '@/axios.js'

export default createStore({
  state: {
    stories: [],
    courses: [],
  },

  getters: {
    getStories: state => state.stories,
    getCourses: state => state.courses,
  },

  mutations: {
    setStories (state, stories) {
      state.stories = stories;
    },
    setCourses (state, courses) {
      state.courses = courses;
    }
  },

  actions: {
    async fetchStories ({commit}) {
      try {
        const response = await axios.getStories(true, 1, 1);
        commit('setStories', response.data.filter(a => a.is_active)[0]);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchCourses ({commit}) {
      try {
        const response = await axios.getCourses(3, 1, 'title');
        console.log(response.data);
        commit('setCourses', response.data);
      } catch (err) {
        console.log(err);
      }
    }
  },

  modules: {
  }
})