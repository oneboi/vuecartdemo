<template>
  <div id="list">
    <Item  v-for="product in datalist" :key='product.id' :product="product"></Item>
  </div>
</template>

<script>
import Item from './components/Item.vue'
export default {
  name: 'list',
  data () {
    return {
      
      datalist:[
      {id:1,title:"家庭装修，欧式风格",price:2.5},
      {id:2,title:"item2",price:2.5},
      {id:3,title:"item3",price:2.5},
      {id:4,title:"item4",price:2.5},
      {id:5,title:"item5",price:2.5},
      {id:6,title:"item6",price:2.5},
      {id:7,title:"item7",price:2.5},
      {id:8,title:"item8",price:2.5},
      {id:9,title:"item9",price:2.5},
         ]
    }
  },
  components:{
    Item
  }
}
</script>

<style>

</style>
