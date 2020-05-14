<template>
  <div id="app">

    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>

  </div>
</template>

<script>

import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';

export default {

  data () {
    return {

    }
  },

  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
  }
</style>
