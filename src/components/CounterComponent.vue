<!-- src/components/CounterComponent.vue -->
<template>
    <div>
      <h2>Counter Component</h2>
      <p>Local Count: {{ localCount }}</p>
      <p>Doubled Local Count: {{ doubledLocalCount }}</p>
      <button @click="incrementLocal">Increment Local</button>
      <button @click="decrementLocal">Decrement Local</button>
    </div>
  </template>
  
  <script>
  import { counterMixin } from '../mixins/counterMixin';
  
  export default {
    mixins: [counterMixin]
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  