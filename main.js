const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(100)
        const onsale = ref(true)
        const details = ref(['50% cotton', '30% wool', '20% polyester'])
        const variants = ref([ 
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
        ])
        const sizes = ref(['S ', 'M ', 'L '])
        const cart = ref(0)

        function addToCart() {
            cart.value += 1
        }
        function updateImage(variantsImage) {
            image.value = variantsImage
        }

        function stockStatus(){
            inventory.value = inventory.value > 0 ? 0 :100;
        }

        return {
            product,
            image,
            inStock,
            inventory,
            onsale,details,variants,sizes,addToCart,updateImage,cart,stockStatus
        }
    }

}).mount('#app')