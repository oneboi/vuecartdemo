<template>
  <div id="cartitem">
    
    <div class="item">
      
    <img src="https://img.alicdn.com/imgextra/i1/1078367932/TB2LrbCAeySBuNjy1zdXXXPxFXa_!!1078367932-0-item_pic.jpg_430x430q90.jpg">
    
    <div class="text">
        <div class="title">{{info.title}}</div>
        <div class="price">{{info.price}}</div>
    </div>

    <div class="num">

      <div @click="addProduct({id:info.id,price:info.price,title:info.title})">+</div>
      
      <div>{{info.num}}</div>
      <div @click="reduceProduct({id:info.id})">-</div>
      <div @click="removeProduct({id:info.id})">移除</div>
    </div>
  

    </div>
 
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: 'cartitem',
  data () {
    return {
      msg: ''
    }
  },
  //接受信息
  props:['info'],
  methods:{
    ...mapActions(['addProduct','reduceProduct','removeProduct'])
  }
}
</script>

<style scoped>
.item{
  display: flex;
  padding: 0.1rem;
}

.item img{
  width: 2rem;
  height: 2rem;
  padding-right: .1rem;
}

.item .text{
  display: flex; 
  flex-direction: column;

}

.price{
  padding-left: .5rem;
  padding-top: .5rem;
  color:#ff6600;
}
.num{
  width: 1rem;
  display: flex;
  line-height: 2rem;
  flex: 1;
  justify-content: space-around;
}

</style>
