const jwt = require('jsonwebtoken');

// JWT 密鑰，應該是一個安全的隨機字符串
// 請將你的實際 JWT 密鑰替換成這裡的示例值
// 請注意，實際上應該更安全地管理這個密鑰，不應該硬編碼在程式中
// 你可以使用環境變數或其他方法安全存儲密鑰
const jwtSecret = 'your-secret-key';

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

module.exports = { jwtSecret, authenticateToken };
