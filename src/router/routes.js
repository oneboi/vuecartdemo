
import Cart from '../page/cart/CartList.vue'
import List from '../page/product/ProductList.vue'
const routes = [
  { path: '/', component: List },
  { path: '/cart', component: Cart },
  { path: '/list', component: List }
]


export default routes;