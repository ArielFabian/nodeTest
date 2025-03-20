const express = require('express')
const router = require('express').Router()
const dotenv = require('dotenv')
const cors = require('cors')
const coinPaprikaRoutes = require('./routes/coinPaprika')
const mongoTestRoutes = require('./routes/mongoTest')
const app = express()
const port = 3000

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/coin-paprika', coinPaprikaRoutes)
app.use('/mongodb', mongoTestRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))