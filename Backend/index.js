import express from "express"
import cors from "cors"
import router from "./Router/workflowrouter.js"
const app=express()
app.use(cors({
  origin:"https://aggroso-blue.vercel.app/",
  credentials:true
}))
app.use(express.json())
app.use("/sent",router);

app.listen(3000,()=>{
    console.log("server has been started")
})
