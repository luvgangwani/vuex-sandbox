<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-bind:key="index" v-for="(product, index) in saleProducts">
                <p>{{ product.name }}</p>
                <p>${{ product.price }}</p>
            </li>
        </ul>

        <button v-on:click.prevent="reducePrice(4)">Reduce Price</button>

    </div>
</template>

<script>
export default {    
    computed: {
        products() {
            return this.$store.state.products;
        },

        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    },

    methods: {
        reducePrice: function(amount) {
            this.$store.dispatch('reducePrice', amount);
        }
    },
}
</script>

<style scoped>
    
    #product-list-one {
        width: 800px;
        background-color: #6dfa6da8;
        padding: 25px;
        display: inline-block;
        border-radius: 10px;
    }

    #product-list-one ul {
        list-style: none;
        padding: 0px;
    }

    #product-list-one ul li {
        background-color: #ffffff;
        padding: 5px;
        margin: 10px 0px;
        border-radius: 10px;
    }


</style>