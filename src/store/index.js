// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts'
import counter from './counter'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts: {
      namespaced: true,
      ...posts
    },
    counter: {
      namespaced: true,
      ...counter
    },
    auth: {
      namespaced: true,
      ...auth
    }
  }
})
