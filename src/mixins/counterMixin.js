// src/mixins/counterMixin.js
export const counterMixin = {
    data() {
      return {
        localCount: 0
      };
    },
    computed: {
      doubledLocalCount() {
        return this.localCount * 2;
      }
    },
    methods: {
      incrementLocal() {
        this.localCount++;
      },
      decrementLocal() {
        this.localCount--;
      }
    }
  };
  