<template>
  <div>
    <!-- 使用 router-link 設置導航到不同的路由 -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>

    <!-- 使用 router-view 顯示當前路由的內容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'register-form',
};
</script>

<style>
/* 添加你的 CSS 樣式 */
</style>
