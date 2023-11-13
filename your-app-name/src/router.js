import { createRouter, createWebHistory } from 'vue-router';

// 引入你的组件
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const routes = [
  { path: '/', component: Home }, // 主页路由
  { path: '/register', component: Register }, // 注册路由
  { path: '/login', component: Login }, // 登录路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;