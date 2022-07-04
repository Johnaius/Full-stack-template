const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000

let db,
    dbConnectionString = process.env.DB_STRING
    dbName = 'sample_mflix',
    collection ='comments'

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('comments')
    })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})