
const express = require('express')
const app = express()
const port = 3009

app.get('/', (req, res) => {
  res.send('Hello World kya haal h bhaiiii index9')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
