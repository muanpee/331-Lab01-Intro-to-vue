const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref('Boots');
    const description = ref('A pair of sturdy boots for all terrains.');
    return {
      product,description
    }
    }

}).mount('#app');