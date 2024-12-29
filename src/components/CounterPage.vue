<!-- src/components/CounterPage.vue -->
<template>
    <div>
      <h1>Counter Page</h1>
      <error-component :error="errorMessage" @clear-error="clearError"></error-component>
      <loading-spinner :loading="loading"></loading-spinner>
      <p>Global Count: {{ count }}</p>
      <p>Double Global Count: {{ doubleCount }}</p>
      <button @click="increment">Increment Global</button>
      <button @click="incrementAsync">Increment Global Async</button>
      <CounterComponent />
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import CounterComponent from './CounterComponent.vue'
  import ErrorComponent from './ErrorComponent.vue'
  import LoadingSpinner from './LoadingSpinner.vue'
  
  export default {
    components: {
      CounterComponent,
      ErrorComponent,
      LoadingSpinner
    },
    computed: {
      ...mapState('counter', ['count']),
      ...mapGetters('counter', ['doubleCount'])
    },
    data() {
      return {
        errorMessage: '',
        loading: false
      }
    },
    methods: {
      ...mapActions('counter', ['incrementAsync']),
      increment() {
        this.$store.commit('counter/increment')
      },
      clearError() {
        this.errorMessage = ''
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  