<template>
  <div id="app">
   <router-view></router-view>
  <!--  <ProductList></ProductList> -->
  </div>
</template>

<script>
import ProductList from './page/product/ProductList.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    ProductList
  }
}
</script>

<style>
#app{
  font-size: .4rem;
  width: 100%;
  height: 100%;
}

</style>
