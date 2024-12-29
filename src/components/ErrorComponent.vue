// src/components/ErrorComponent.vue
<template>
  <div v-if="error" class="error">
    <p>{{ error }}</p>
    <button @click="clearError">Clear Error</button>
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
  props: ['error'],
  methods: {
    clearError() {
      this.$emit('clear-error')
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
}
</style>
  