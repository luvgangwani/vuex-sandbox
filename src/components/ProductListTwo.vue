<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-bind:key="index" v-for="(product, index) in products">
                <p>{{ product.name }}</p>
                <p>${{ product.price }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
}
</script>

<style scoped>

#product-list-two {
    width: 800px;
    background-color: #6dc2faa8;
    padding: 25px;
    margin-top: 20px;
    display: inline-block;
    border-radius: 10px;
}

#product-list-two ul {
    list-style: none;
    padding: 0px;
}

#product-list-two ul li {
    background-color: #ffffff;
    padding: 5px;
    margin: 10px 0px;
    border-radius: 10px;
}
    
</style>