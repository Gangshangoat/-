import { createApp } from 'vue';
import App from './App.vue'; // 你的 Vue 根组件
import router from './router'; // 如果有使用 Vue Router，引入你的 router.js 文件

// 引入主页、注册和登录组件
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const app = createApp(App);

app.use(router); // 如果有使用 Vue Router，这里需要配置 router

// 注册主页、注册和登录组件为全局组件
app.component('Home', Home);
app.component('Register', Register);
app.component('Login', Login);

app.mount('#app');
