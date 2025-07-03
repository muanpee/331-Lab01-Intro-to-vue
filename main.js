const app = Vue.createApp({
    setup() {
        const cart = ref([])
        const premium = ref(true)
        const onSale = ref(false)
        function updateCart(id){
            cart.value.push(id)
        }
        function removeFromCart(id){
            const index = cart.value.indexOf(id)
            if (index > -1) {
                cart.value.splice(index, 1)
            }
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
            onSale,
            updateCart,
            removeFromCart,
            cartDisplay
        };
    }

});
app.component('product-display', productDisplay);
app.component('review-form', reviewForm);
app.component('review-list', reviewList)
app.mount('#app');