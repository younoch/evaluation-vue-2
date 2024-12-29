<!-- src/components/Home.vue -->
<template>
    <div>
      <h1>Home</h1>
      <CounterComponent />
    </div>
  </template>
  
  <script>
  import CounterComponent from './CounterComponent.vue'
  
  export default {
    components: {
      CounterComponent
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  