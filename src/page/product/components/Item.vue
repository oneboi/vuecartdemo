<template>
  <div id="item">
       
  
     <img src="https://img.alicdn.com/imgextra/i1/1078367932/TB2LrbCAeySBuNjy1zdXXXPxFXa_!!1078367932-0-item_pic.jpg_430x430q90.jpg">
      <div class="text">
        <p class="title"> {{product.title}}</p>
        <p class="price">&yen{{product.price}}</p>
         <div class="cart" @click="addProduct(product)">加入购物车</div>
      </div>
     
    
  </div>
</template>

<script>

import {mapActions}  from "vuex"
export default {
  name: 'item',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods:{
    ...mapActions(['addProduct'])
  },
  //接受父组件的数据produt
  props:['product']
}
</script>

<style>

#item{
  display: flex;
  padding:  0.08rem;
  margin:   0.04rem;
  box-sizing: border-box;
  box-shadow: 0.05rem 0.05rem 0.05rem #fff;
}
p.title{
 padding: 0.1rem;

}
p.price{
position: absolute;
bottom: 1.2rem;
left:0.2rem;
color: red;
}

img{
  width: 3.6rem;
  height: 3.6rem;
}
.text{
  box-sizing: border-box;
  position: relative;
  flex: 1;
  padding: 0.1rem;
}

.cart{
  position: absolute;
  bottom: .2rem;
  left: 0rem;
  width: 100%;
  background:lightgreen;
  color: #fff;
  height: .8rem;
  line-height: .8rem;
  text-align: center;

}

</style>
