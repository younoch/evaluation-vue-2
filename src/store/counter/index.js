// src/store/counter/index.js
const state = {
    count: 0
  }
  
  const getters = {
    doubleCount: state => state.count * 2
  }
  
  const actions = {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
  
  const mutations = {
    increment(state) {
      state.count++
    }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }
  