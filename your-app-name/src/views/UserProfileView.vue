<template>
    <div class="page_container">
      <div class="user_profile_container">
        <div class="user_profile">
          <h2>個人資料</h2>
          <!-- 基本信息 -->
          <div class="profile_section">
            <h3>基本信息</h3>
            <div class="input_group">
              <i class="fa fa-user"></i>
              <input
                type="text"
                placeholder="用户名"
                class="input_text"
                id="username"
              />
            </div>
            <div class="input_group">
              <i class="fa fa-image"></i>
              <input
                type="file"
                accept="image/*"
                id="avatar"
              />
            </div>
            <div class="input_group">
              <i class="fa fa-user"></i>
              <input
                type="text"
                placeholder="姓名"
                class="input_text"
                id="fullName"
              />
            </div>
          </div>
  
          <!-- 联系信息 -->
          <div class="profile_section">
            <h3 style="margin-top: 30px;">聯繫信息</h3>
            <div class="input_group">
              <i class="fa fa-envelope"></i>
              <input
                type="email"
                placeholder="電子郵件地址"
                class="input_text"
                id="email"
              />
            </div>
            <div class="input_group">
              <i class="fa fa-phone"></i>
              <input
                type="tel"
                placeholder="手機號碼"
                class="input_text"
                id="phoneNumber"
              />
            </div>
          </div>
  
          <!-- 个人信息 -->
          <div class="profile_section">
            <h3 style="margin-top: 30px;">個人信息</h3>
            <div class="input_group">
              <i class="fa fa-calendar"></i>
              <input
                type="date"
                placeholder="生日"
                class="input_text"
                id="birthdate"
              />
            </div>
            <div class="input_group">
              <i class="fa fa-venus-mars"></i>
              <select
                class="input_text"
                id="gender"
              >
                <optgroup label="性别">
                  <option value="" selected disabled hidden>性别</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                </optgroup>
              </select>
            </div>
            <div class="input_group">
              <i class="fa fa-map-marker"></i>
              <input
                type="text"
                placeholder="地址"
                class="input_text"
                id="address"
              />
            </div>
          </div>
  
          <!-- 账户信息 -->
          <div class="profile_section">
            <h3 style="margin-top: 30px;">帳號信息</h3>
            <div class="info_item">
              <span>註冊日期:</span>
              <span id="registrationDate">2023-10-05</span>
            </div>
            <div class="info_item">
              <span>最后登入:</span>
              <span id="lastLogin">2023-10-05 22:35:44</span>
            </div>
          </div>
  
          <div class="profile_section">
            <h3 style="margin-top: 30px;">設置</h3>
            <div class="user_settings">
              <div class="setting_option">
                <label>密碼更改</label>
                <button id="changePassword">更改密碼</button>
              </div>
              <div class="setting_option">
                <label>通知設置</label>
                <select id="notificationPreference">
                  <option value="email">通過電子郵件</option>
                  <option value="sms">通過信息</option>
                  <option value="push">通過推送通知</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- 上传记录 -->
          <div class="profile_section">
            <h3 style="margin-top: 30px;">上傳紀錄</h3>
            <table class="upload_records">
              <thead>
                <tr>
                  <th>標題</th>
                  <th>日期</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <!-- 示例上传记录项，你可以在这里使用循环来渲染实际数据 -->
                <tr>
                  <td>錄音文件1</td>
                  <td>2023-10-05</td>
                  <td>
                    <!-- 添加操作按钮，例如查看、下载等 -->
                    <button id="viewRecord1">查看</button>
                    <button id="downloadRecord1">下载</button>
                  </td>
                </tr>
                <!-- 其他上传记录项 -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  mounted() {
    // 获取DOM元素
    const usernameInput = document.getElementById("username");
    const avatarInput = document.getElementById("avatar");
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const birthdateInput = document.getElementById("birthdate");
    const genderSelect = document.getElementById("gender");
    const addressInput = document.getElementById("address");
    const registrationDateSpan = document.getElementById("registrationDate");
    const lastLoginSpan = document.getElementById("lastLogin");
    const changePasswordButton = document.getElementById("changePassword");
    const notificationPreferenceSelect = document.getElementById("notificationPreference");
    const shareProfileCheckbox = document.getElementById("shareProfile");
    const bioTextarea = document.getElementById("bio");

    // 示例：更改用户名时触发光晕效果
    usernameInput.addEventListener("focus", () => {
      usernameInput.classList.add("glowIcon");
    });

    usernameInput.addEventListener("focusout", () => {
      usernameInput.classList.remove("glowIcon");
    });

    // 在这里添加其他事件处理程序和逻辑
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
  
  .user_profile_container {
    position: relative;
    width: 400px;
    height: auto;
    background: #040717;
    border-radius: 50px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 70px;
    color: #000;
    font-family: Arial, sans-serif;
  }
  
  .user_profile_container::before,
  .user_profile_container::after {
    content: "";
    position: absolute;
    width: 170%;
    height: 170%;
    background-image: conic-gradient(transparent, transparent, transparent, #0dc4f1);
    animation: rotate_border 6s linear infinite;
  }
  
  .user_profile_container::after {
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
  
  .user_profile {
    position: relative;
    background-color: #f2f2f5;
    border-radius: 50px 5px;
    inset: 5px;
    padding: 50px 40px;
    z-index: 10;
    color: #000;
  }
  
  h2 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  
  .input_group {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  select#gender optgroup {
    font-size: 14px; /* 这里可以调整字体大小 */
  }
  .input_text {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom:  1px solid #2acfdb;
    font-size: 20px;
    padding-left: 10px;
    color: #000;
  }
  
  ::placeholder {
    font-size: 15px;
    color: #00000052;
    letter-spacing: 1px;
  }
  
  .fa {
    font-size: 20px;
  }
  
  .setting_option {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  
  button,
  select,
  input[type="checkbox"] {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button {
    background-color: #0abe64;
    color: #000;
    margin-left: 10px;
  }
  
  /* 与登录表单相似的样式结束 */
  
  /* 以下是针对个人资料页面的自定义样式 */
  .upload_records {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .upload_records th,
  .upload_records td {
    padding: 10px;
    border-bottom: 1px solid  #0abe64;
    text-align: left;
  }
  
  .upload_records th {
    font-weight: bold;
  }
  
  .upload_records tbody tr:hover {
    background-color:  #0abe64;
    color: #000;
    transition: background-color 0.3s ease-in;
  }
  </style>
  