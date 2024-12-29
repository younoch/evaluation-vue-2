// src/mixins/globalMixin.js
export const globalMixin = {
    created() {
      console.log(`${this.$options.name || 'undefined'} component created`)
    },
    methods: {
      logMessage(message) {
        console.log(message)
      }
    }
  }
  