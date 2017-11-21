import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index.vue'
import Topic from '@/components/topic/topic.vue'
import ShoppingCart from '@/components/shopping-cart/shopping-cart.vue'
import ItemClass from '@/components/item-class/item-class.vue'
import Recommend from '@/components/recommend/recommend.vue'
import Me from '@/components/me/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/recommend',
      children: [
        {
          path: 'recommend',
          name: 'Recommend',
          component: Recommend
        }
      ]
    },
    {
      path: '/topic',
      name: 'tipic',
      component: Topic
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/class',
      name: 'class',
      component: ItemClass
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    }
  ]
})
