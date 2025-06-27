const app = Vue.createApp({
    setup() {
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id){
            cart.value.push(id)
        }
        // Computed property to show cart contents with counts
        const cartDisplay = computed(() => {
            const counts = {}
            cart.value.forEach(id => {
                counts[id] = (counts[id] || 0) + 1
            })
            
            // Map IDs to product names for better display
            const productNames = {
                2234: 'Green',
                2235: 'Blue'
            }
            
            const displayItems = Object.entries(counts).map(([id, count]) => {
                const name = productNames[id] || `ID ${id}`
                return `${name}: ${count}`
            })
            
            return displayItems.length > 0 ? displayItems.join(', ') : '0'
        })
         return {
            cart
            ,premium,
            updateCart,
            cartDisplay
        };
    }

});
app.component('product-display', productDisplay);
app.mount('#app');