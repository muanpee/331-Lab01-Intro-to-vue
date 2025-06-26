const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(100)
        const onsale = ref(true)
        return {
            product,
            image,
            inStock,
            inventory,
            onsale
        }
    }

}).mount('#app')