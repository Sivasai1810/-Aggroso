import express from "express"
import cors from "cors"
import router from "./Router/workflowrouter.js"
const app=express()
const allowedOrigins = [
  "http://localhost:5173",    
  "https://aggroso-blue.vercel.app"
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json())
app.use("/sent",router);

app.listen(3000,()=>{
    console.log("server has been started")
})
