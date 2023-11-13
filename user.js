const express = require('express');
const router = express.Router();
const pool = require('./da'); // 引入數據庫池
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./server'); // 引入 JWT 密鑰

// 註冊用戶
router.post('/register', (req, res) => {
  // 從請求中獲取用戶註冊數據（例如：用戶名、密碼等）
  const userData = req.body;

  // 在這裡執行註冊用戶的數據庫操作
  // 例如：將 userData 插入到用戶數據表中

  // 假設註冊成功，生成 JWT 令牌並返回給客戶端
  const token = jwt.sign(userData, jwtSecret);
  res.json({ message: '用戶註冊成功', token });
});

// 登錄用戶
router.post('/login', (req, res) => {
  // 從請求中獲取用戶登錄數據（例如：用戶名、密碼等）
  const loginData = req.body;

  // 在這裡執行用戶登錄的數據庫操作
  // 例如：驗證 loginData 是否與數據庫中的記錄匹配

  // 假設登錄成功，生成 JWT 令牌並返回給客戶端
  const token = jwt.sign(loginData, jwtSecret);
  res.json({ message: '用戶登錄成功', token });
});

// 獲取用戶資訊
router.get('/user-info/:id', (req, res) => {
  // 從請求中獲取用戶ID
  const userId = req.params.id;

  // 在這裡執行獲取用戶資訊的數據庫操作
  // 例如：根據 userId 查詢用戶數據

  // 返回用戶資訊或錯誤的響應
  res.json({ message: '用戶資訊獲取成功', user: { id: userId, username: '示例用戶' } });
});

// 更新用戶資訊
router.put('/update-user/:id', (req, res) => {
  // 從請求中獲取用戶ID和更新數據
  const userId = req.params.id;
  const updatedUserData = req.body;

  // 在這裡執行更新用戶資訊的數據庫操作
  // 例如：根據 userId 更新用戶數據

  // 返回成功或失敗的響應
  res.json({ message: '用戶資訊更新成功' });
});

// 刪除用戶
router.delete('/delete-user/:id', (req, res) => {
  // 從請求中獲取用戶ID
  const userId = req.params.id;

  // 在這裡執行刪除用戶的數據庫操作
  // 例如：根據 userId 刪除用戶數據

  // 返回成功或失敗的響應
  res.json({ message: '用戶刪除成功' });
});

module.exports = router;