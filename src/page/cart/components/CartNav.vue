<template>
  <div id="cartnav">
     <div class="box">
     <div class="count">总计：{{money}}</div>
     <div class="goPay">去结算</div>
     </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'cartnav',
  data () {
    return {
      msg: ''
    }
  },
  computed:{
    ...mapGetters(["money"])
  },
  components:{
    
  }
}
</script>

<style scoped>
.cartnav{
  position: relative;
}
.box{
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 1rem;
  line-height: 1rem;
  left: 0;
  display: flex;

  border-top:0.02rem solid #999;
}
.box .count{
  min-width: 3rem;
}
.box .goPay{
  flex: 1;
  text-align: center;
  background: #ff6600;
  color: #fff;
}

</style>
