const app = Vue.createApp({
    setup() {
        const cart = ref(0)
        const premium = ref(flase)
        return {
            cart
            ,premium
        };
    }

});
app.component('product-display', productDisplay);
app.mount('#app');