<template>
  <div class="login_form_container">
    <div class="login_form">
      <h2>註冊</h2>
      <form @submit.prevent="submitRegistration">
        <div class="input_group">
          <i class="fa fa-users" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="名稱"
            class="input_text"
            autocomplete="off"
            v-model="username"
            required
          />
        </div>
        <div class="input_group">
          <i class="fa fa-envelope"></i>
          <input
            type="email"
            placeholder="註冊Gmail"
            class="input_text"
            autocomplete="off"
            v-model="email"
            required
          />
        </div>
        <div class="input_group">
          <i class="fa fa-lock"></i>
          <input
            type="password"
            placeholder="新密碼"
            class="input_text"
            autocomplete="off"
            v-model="password"
            required
          />
        </div>
        <div class="input_group">
          <i class="fa fa-lock"></i>
          <input
            type="password"
            placeholder="重複密碼"
            class="input_text"
            autocomplete="off"
            v-model="confirmPassword"
            required
          />
        </div>
        <div class="button_group" id="login_button">
          <button type="submit"><b>提交</b></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    submitRegistration() {
      // 进行前端验证
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!this.email.match(emailPattern)) {
        alert('請提供有效的 Gmail 地址');
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert('密碼和確認密碼不匹配');
        return;
      }

      // 显示注册成功消息
      alert('註冊成功');

      // TODO: 在这里提交数据到后端
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
  background-color: #040717;
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
  background-image: conic-gradient(transparent, transparent, transparent, #f1b900);
  animation: rotate_border 6s linear infinite;
}

.login_form_container::after {
  position: absolute;
  width: 170%;
  height: 170%;
  content: '';
  background-image: conic-gradient(transparent, transparent, transparent, #e48202);
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
  border-bottom: 1px solid #e2c337;
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
  margin-top: 22px;
} 

#login_button button {
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 22px;
  letter-spacing: 2px;
  border: 1px solid #000000;
  border-radius: 50px;
  background-color: #d4b710;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: #b7a206;
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