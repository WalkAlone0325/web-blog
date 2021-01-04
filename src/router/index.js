import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

/**
 * { title: '首页', path: '/home' },
      { title: '文章', path: '/article' },
      { title: '日记', path: '/diary' },
      { title: '生活', path: '/live' },
      { title: '关于', path: '/about' },
 */

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue'),
  },
  {
    path: '/article/:id',
    name: 'ArticleItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleItem.vue'),
  },
  {
    path: '/diary',
    name: 'Diary',
    component: () => import(/* webpackChunkName: "about" */ '../views/Diary.vue'),
  },
  {
    path: '/live',
    name: 'Live',
    component: () => import(/* webpackChunkName: "about" */ '../views/Live.vue'),
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import(/* webpackChunkName: "about" */ '../views/Link.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
