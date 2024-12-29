// src/store/auth/index.js
const state = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: ''
  }
  
  const getters = {
    isAuthenticated: state => state.isAuthenticated,
    authError: state => state.error
  }
  
  const actions = {
    login({ commit }, credentials) {
      commit('setLoading', true)
      // Simulate an API call for authentication
      setTimeout(() => {
        if (credentials.email === 'admin@example.com' && credentials.password === 'admin') {
          commit('setUser', { email: 'admin@example.com' })
          commit('setIsAuthenticated', true)
          commit('setError', '')
        } else {
          commit('setError', 'Invalid email or password')
        }
        commit('setLoading', false)
      }, 1000)
    },
    logout({ commit }) {
      commit('setUser', null)
      commit('setIsAuthenticated', false)
    }
  }
  
  const mutations = {
    setUser(state, user) {
      state.user = user
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setError(state, error) {
      state.error = error
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  