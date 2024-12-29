<!-- src/components/LoginPage.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit" :disabled="loading">Login</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapState('auth', ['loading', 'error'])
    },
    methods: {
      ...mapActions('auth', ['login']),
      handleLogin() {
        this.login({ email: this.email, password: this.password })
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  