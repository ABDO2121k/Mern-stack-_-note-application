import cors from 'cors';
import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './connectDb.js';
import getNotes from './router/getNotes.js'


dotenv.config()
connectDB() 

const PORT=process.env.PORT
const app=express()

app.use(express.json())
app.use(cors())



//get notes

app.use('/',getNotes)


app.listen(PORT,()=>{
    console.log(`server lister at port : ${PORT}`)
})