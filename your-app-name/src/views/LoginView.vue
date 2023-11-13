<template>
    <div class="login_form_container">
      <div class="login_form">
        <h2>登入</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            type="text"
            placeholder="Gmail"
            class="input_text"
            autocomplete="off"
            v-model="email"
            @focus="addGlowEffect(true)"
            @focusout="addGlowEffect(false)"
          />
        </div>
        <div class="input_group">
          <i class="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="密碼"
            class="input_text"
            autocomplete="off"
            v-model="password"
            @focus="addGlowEffect(true)"
            @focusout="addGlowEffect(false)"
          />
        </div>
        <div class="button_group" id="login_button">
          <button @click="submitLogin"><b>提交</b></button>
        </div>
        <div class="fotter">
          <a>忘記密碼 ?</a>
          <router-link to="/registration" style="color: black;">註冊</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
        glowIcon: false
      };
    },
    methods: {
      addGlowEffect(value) {
        this.glowIcon = value;
      },
      submitLogin() {
        // 在这里处理登录逻辑
        // 获取用户输入的 email 和 password：this.email 和 this.password
        // 进行登录验证
        // 如果登录成功，可以导航到其他页面
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    background-color: #040d3f;
  }
  
  .login_form_container {
    position: relative;
    width: 400px;
    height: 470px;
    max-width: 400px;
    max-height: 470px;
    background: #040717;
    border-radius: 50px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 70px;
  }
  
  .login_form_container::before {
    position: absolute;
    width: 170%;
    height: 170%;
    content: '';
    background-image: conic-gradient(transparent, transparent, transparent, #0dc4f1);
    animation: rotate_border 6s linear infinite;
  }
  
  .login_form_container::after {
    position: absolute;
    width: 170%;
    height: 170%;
    content: '';
    background-image: conic-gradient(transparent, transparent, transparent, #1568b6);
    animation: rotate_border 6s linear infinite;
    animation-delay: -3s;
  }
  
  @keyframes rotate_border {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .login_form {
    position: absolute;
    content: '';
    background-color: #f2f2f5;
    border-radius: 50px 5px;
    inset: 5px;
    padding: 50px 40px;
    z-index: 10;
    color: #000000;
  }
  
  h2 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  
  .input_group {
    margin-top: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  
  .input_text {
    width: 95%;
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #2acfdb;
    font-size: 20px;
    padding-left: 10px;
    color: #000000;
  }
  
  ::placeholder {
    font-size: 15px;
    color: #00000052;
    letter-spacing: 1px;
  }
  
  .fa {
    font-size: 20px;
  }
  
  #login_button {
    position: relative;
    width: 300px;
    height: 40px;
    transition: 1s;
    margin-top: 70px;
  }
  
  #login_button a {
    position: absolute;
    width: 100%;
    height: 100%;
    text-decoration: none;
    z-index: 10;
    cursor: pointer;
    font-size: 22px;
    letter-spacing: 2px;
    border: 1px solid #000000;
    border-radius: 50px;
    background-color: #0abe64;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .fotter {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  
  .fotter a {
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
  }
  
  .glowIcon {
    text-shadow: 0 0 10px #000000;
  }
  </style>