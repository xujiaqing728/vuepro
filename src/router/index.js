import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Detail = () => import('views/detail/Detail')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '图书兄弟'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '商品分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '商品详情'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from,next) => {
  //如果没有登录，在这里LOGIN
  next();
  document.title = to.meta.title;
})

export default router
