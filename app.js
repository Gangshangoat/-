const express = require('express');
const app = express();
const routes = require('./routes'); // 引入路由文件

// 設定中間件
app.use(express.json()); // 解析JSON請求主體
// 添加其他中間件，如CORS處理等

// 設定路由
app.use('/api', routes); // 將路由連接到'/api'路徑下

// 啟動伺服器
const PORT = process.env.PORT || 20210; // 使用環境變數或默認端口3000
app.listen(PORT, () => {
  console.log(`伺服器正在端口${PORT}上運行`);
});
