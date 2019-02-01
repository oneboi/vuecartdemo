import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const state={
	cart:[]
}

const getters={
	//总金额
	money(state){
		let money=0;
		state.cart.forEach(item=>{
			console.log(item);
			money+=item.price*item.num;
		})
		return money;
	}
}

const mutations={
	//这里的params就接受到actions里面出来的数据
	//通过对象的方法将里面的数据提取出来
	addProduct(state,{id,title,price}){
		//下面是根据传来的数据修改cart中的数据
		
		let isHas=state.cart.some(item=>{
			//some方法只要item有一个true,isHas便为true
			if(item.id==id){
				item.num++;
				return true;

			}else{
				return false;
			}
		})
		if(!isHas){
			state.cart.push({id,title,price,num:1})
		}

	},
	initCar(state,cart){ //这里的cart是action里面方法传过来的数据results
		state.cart=cart //将后端的cart和state里面的cart实现同步
	},
	reduceProduct(state,{id}){
		var  length=state.cart.length;
		for (var i = 0; i< length; i++) {
			if(state.cart[i].id==id){
				state.cart[i].num--
				if(state.cart[i].num==0){
					state.cart.splice(i,1)
					break;
				}
			}
		}
	},
	removeProduct(state,{id}){
		var  length=state.cart.length;
		for (var i = 0; i< length; i++) {
			if(state.cart[i].id==id){
			 state.cart.splice(i,1)
			 break;
				
			}
		}
	}
}

const actions={
	//添加商品和增加商品数量
	addProduct({commit},params){
		//用setTimeout去模拟一个异步数据的获取呢
		setTimeout(()=>{
			let result="ok"
			if(result=='ok'){
				//模拟数据已经获取成功，commit提交到muatation里面的addGood方法，第二个参数是传参
				commit('addProduct',params)
			}
		},300)
	},
	//从内存或者数据库初始化购物车
	initCar({commit}){
		setTimeout(()=>{
			let results=JSON.parse(localStorage.cart||'[]');
			commit('initCar',results)

		},300)
	},
	//减少数量
	reduceProduct({commit},params){
		setTimeout(()=>{
            let result='ok';
            if(result=='ok'){
            	//模拟数据已经获取成功，commit到mutation里面的reduceProduct方法
            	//第二个参数是传参
            	commit('reduceProduct',params)
            }
		},300)
	},
	//移除商品购物的记录
	removeProduct({commit},params){
		setTimeout(()=>{
            let result='ok';
            if(result=='ok'){
            	//模拟数据已经获取成功，commit到mutation里面的reduceProduct方法
            	//第二个参数是传参
            	commit('removeProduct',params)
            }
		},300)
	}
}

const store=new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

export default store;