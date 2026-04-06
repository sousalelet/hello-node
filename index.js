const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Olá, lelet')
})

app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000')
}) 
