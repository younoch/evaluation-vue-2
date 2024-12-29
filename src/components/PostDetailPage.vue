<!-- src/components/PostDetailPage.vue -->
<template>
    <div>
      <h1>Post Details</h1>
      <p>ID: {{ $route.params.id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostDetailPage',
    props: ['id']
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  