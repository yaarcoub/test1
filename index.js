const express = require('express')
const app = express()
app.get('/home', function (req, res) {
  res.send('Hello Yaarcoub');
})
app.listen(3000)