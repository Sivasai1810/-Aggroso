import express from "express"
import cors from "cors"
import router from "./Router/workflowrouter.js"
const app=express()
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(express.json())
app.use("/sent",router);

app.listen(3000,()=>{
    console.log("server has been started")
})
