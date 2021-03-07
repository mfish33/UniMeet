import * as functions from "firebase-functions";
import express from 'express'
import cors from 'cors'

let app = express()
app.use(cors())


app.get('/test',(req,res) => {
    res.send("Hello World")
})

exports.functions =  functions.https.onRequest(app);