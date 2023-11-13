const express = require('express');
const router = express.Router();
const pool = require('./da'); // 引入數據庫池

// 插入數據
router.post('/insert-data', (req, res) => {
  const insertData = {
    name: 'John Doe',
    age: 30,
  };

  pool.query('INSERT INTO your_table SET ?', insertData, (err, result) => {
    if (err) {
      console.error('插入數據錯誤', err);
      res.status(500).json({ error: '插入數據失敗' });
    } else {
      console.log('數據插入成功');
      res.json({ message: '數據插入成功' });
    }
  });
});

// 更新數據
router.put('/update-data/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = {
    name: 'Updated Name',
    age: 35,
  };

  pool.query('UPDATE your_table SET ? WHERE id = ?', [updatedData, id], (err, result) => {
    if (err) {
      console.error('更新數據錯誤', err);
      res.status(500).json({ error: '更新數據失敗' });
    } else {
      console.log('數據更新成功');
      res.json({ message: '數據更新成功' });
    }
  });
});

// 查詢數據
router.get('/get-data', (req, res) => {
  pool.query('SELECT * FROM your_table', (err, result) => {
    if (err) {
      console.error('查詢數據錯誤', err);
      res.status(500).json({ error: '查詢數據失敗' });
    } else {
      console.log('查詢結果：', result.rows);
      res.json(result.rows);
    }
  });
});

// 刪除數據
router.delete('/delete-data/:id', (req, res) => {
  const id = req.params.id;

  pool.query('DELETE FROM your_table WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('刪除數據錯誤', err);
      res.status(500).json({ error: '刪除數據失敗' });
    } else {
      console.log('數據刪除成功');
      res.json({ message: '數據刪除成功' });
    }
  });
});

module.exports = router;