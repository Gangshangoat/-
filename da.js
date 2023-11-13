const { Pool } = require('pg');

// 配置數據庫連接參數
const dbConfig = {
  user: 'postgres',         // 用戶名稱
  host: 'localhost',             // 主機名稱，如果 PostgreSQL 在本地運行，可以使用 'localhost'
  database: 'mydatabase',     // 數據庫名稱
  password: 'admin20210909',     // 用戶密碼
  port: 5432,                    // PostgreSQL 服務的端口號，默認為 5432
};

// 創建一個 PostgreSQL 數據庫池
const pool = new Pool(dbConfig);
