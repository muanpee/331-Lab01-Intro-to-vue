const { createApp, ref ,computed} = Vue;

createApp({
    setup() {
        const product = ref('Socks')
        const brand = ref('SE 331')

        const inventory = ref(100)
        const onsale = ref(true)
        const details = ref(['50% cotton', '30% wool', '20% polyester'])
        const variants = ref([ 
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0},
        ])
        const selectedVariant = ref(0)
        const sizes = ref(['S ', 'M ', 'L '])
        const cart = ref(0)

        const title = computed(() => {
            return brand.value + ' ' + product.value
        })

        function addToCart() {
            cart.value += 1
        }
        function updateImage(variantsImage) {
            image.value = variantsImage
        }

        function stockStatus(){
            inventory.value = inventory.value > 0 ? 0 :100;
        }

        function updateVariant(index){
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        })

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        })

        return {
            product,
            image,
            inStock,
            inventory,
            onsale,details,variants,sizes,addToCart,updateImage,cart,stockStatus,title,brand,updateVariant
        }
    }

}).mount('#app')