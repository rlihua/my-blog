const path = require('path');
const express = require('express');
const app = express();

app.get('/api/getArticle', (req, res, next) => {
  res.json({
      data: '后台返回结果 getArticle'
    })
})

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');