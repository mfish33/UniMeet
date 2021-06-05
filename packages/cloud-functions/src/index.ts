import * as functions from "firebase-functions";
import express from 'express'
import cors from 'cors'
import { UserManager } from '@socialcircle/shared'

let app = express()
app.use(cors())


app.get('/test',(req,res) => {
    let manager = new UserManager([])
    manager.getAllNames()
    res.send("Hello World")
})

exports.functions =  functions.https.onRequest(app);