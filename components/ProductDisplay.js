const { ref, computed } = Vue; 
const productDisplay = {
    template: `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{'out-of-stock-img': inventory === 0}">
            </div>
        </div>
    </div>
    <div class="product-info">
        <a :href="productLink">
            <h1>{{ title }}</h1>
        </a>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
        <p v-else>Out of stock</p>
        <p>Shipping: {{shipping}} </p>
        <ul>
            <li v-for="detail in detail"> {{ detail }} </li>
        </ul>
        <div v-for="(variant ,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
            {{variant.color}}
        </div>
        <button class="button" :disabled='!inStock' @click="addToCart" :class='{disabledButton: !inStock}'>Add To Cart</button>
    </div>
    `,
        props: {
            premium:Boolean
        },
        setup(props) {
        const shipping = computed (()=>{
            if (props.premium) {
                return 'Free'
            } else {
                return 30
            }
        })
    
        const product = ref('Boots');
        const brand = ref('SE 331');
        const description = ref('green boots');
        const productLink = ref('https://www.camt.cmu.ac.th/');
        const inventory = ref(100);
        const onSale = ref(true);
        const detail = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ]);
        const selectedVariant = ref(0);
        const sizes = ref([' S ', ' M', ' L ']);
        const cart = ref(0);
        
        function addToCart() {
            cart.value += 1;
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value;
        });
        function updateImage(variantImage) {
            image.value = variantImage;
        }
        function StockStatus() {
            inventory.value = inventory.value > 0 ? 0 : 100;
        }
        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });

        return {
            brand,
            product,
            title,
            description,
            image,
            productLink,
            inventory,
            onSale,
            detail,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            StockStatus,
            updateVariant,
            inStock,
            shipping
        };
    }
};