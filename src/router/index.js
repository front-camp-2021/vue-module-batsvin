import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '@/views/Cart.vue';
import Shop from '@/views/Shop.vue';
import CardPage from '@/views/CardPage.vue';
import WishList from '@/views/WishList.vue';


const routes = [
  {
    path: '/card',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Cart',
    component: Cart,
  },
  {
    path: '/WishList',
    component: WishList,
  },
  {
    path: '/',
    component: Shop,
  },
  {
    path: '/Shop/:id',
    component: CardPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
