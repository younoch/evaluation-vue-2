// src/store/posts/index.js
import api from '../../api'

const state = {
  posts: [],
  loading: false,
  error: ''
}

const getters = {
  allPosts: state => state.posts,
  isLoading: state => state.loading,
  errorMessage: state => state.error
}

const actions = {
  async fetchPosts({ commit }) {
    commit('setLoading', true)
    try {
      const response = await api.getPosts()
      commit('setPosts', response.data)
    } catch (error) {
      commit('setError', error.message)
    } finally {
      commit('setLoading', false)
    }
  }
}

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
