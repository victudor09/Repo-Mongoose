const express = require('express')
const app = express()
const PORT = 3001
const { dbConnection } = require('./config/config')
dbConnection()

app.use(express.json())

app.use('/products', require('./routes/products'))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
