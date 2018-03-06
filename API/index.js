const express = require('express')

const app = express()

const authRoutes = require('./routes/authRoutes')

app.use('/authRoutes', authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT)
