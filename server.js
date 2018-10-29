import express from 'express'
// import MongoClient from 'mongodb'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import bookRouter from './routes/bookRouter'

const app = express()
const port = process.env.PORT || 5656
const url = 'mongodb://localhost:27017/instapi'

// MongoClient.connect(url, function (err, db) {
//   console.log("Connected successfully to server")
// })

const db = mongoose.connect(url)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/api/Books', bookRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

