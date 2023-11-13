const express = require('express');
const app = express();
const port = process.env.PORT || 20210;
const { Pool } = require('pg'); // 引入 pg 驅動程序
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./authentication'); // 引入身份驗證相關模組

// 配置數據庫連接參數
const dbConfig = {
  user: 'postgres',         // 用戶名稱
  host: 'localhost',        // 主機名稱，如果 PostgreSQL 在本地運行，可以使用 'localhost'
  database: 'mydatabase',   // 數據庫名稱
  password: 'admin20210909',// 用戶密碼
  port: 5432,               // PostgreSQL 服務的端口號，默認為 5432
};

// 創建一個 PostgreSQL 數據庫池
const pool = new Pool(dbConfig);

// 中間件，用於解析 JSON 請求
app.use(express.json());

// 引入路由模組
const routes = require('./routes');

// 設定路由
app.use('/api', routes); // 將路由連接到 '/api' 路徑下

// 定義其他路由或處理其他請求的中間件
// ...

// 啟動服務器
app.listen(port, () => {
  console.log(`服務器正在端口${port}上運行`);
});

// 以下是身份驗證相關的程式碼

// 身份驗證中間件
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: '未提供令牌' });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ message: '令牌無效' });
    req.user = user;
    next();
  });
}
