<template>
  <div id="cartlist">
    <div v-if="!cart.length">
      <div class="nolist">
        空空如也，快去购物吧
      </div>
      
    </div>
    <div v-else>
    <CartItem v-for="item  in cart" :key="item.id" :info="item"></CartItem>
   <!--  <CartItem></CartItem>
    <CartItem></CartItem>
    <CartItem></CartItem> -->
    </div>
   

    <CartNav></CartNav>
      </div>
</template>

<script>

import CartNav from './components/CartNav.vue'
import CartItem from './components/CartItem.vue'
import {mapState,mapActions} from "vuex";
export default {
  name: 'cartlist',
  data () {
    return {
      msg: ''
    }
  },
  computed:{
    ...mapState(['cart'])
  },
  components:{
    CartNav,
    CartItem
  },
  methods:{
   ...mapActions(['initCar'])
  },
  created(){
    //调用初始化数据
    // this.initCar()
  }
}
</script>

<style scoped>


.nolist{
  height: 5rem;
  line-height: 5rem;
  text-align: center;

}
</style>
