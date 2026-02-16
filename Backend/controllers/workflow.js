import runworkflow from "./runworkflow.js"
export default  async function workflow(req,res){
      const playload=req.body.playload
      if(!playload){
         return res.status(402).json({
            message:"playload is required"
        })
      }

      const result=await runworkflow(playload.inputtexts,playload.workflows)
      return res.status(200).json({
         message:"workflow executed succesfully",
         result
      })
     
//         "Summarize",
//   "Extract Key Points",
//   "Tag Category"
// Iam using the for loop because in case if we have the hundred categories it might be problematic 
// it may use 100 lines of code 
// so here my approach is usinh the loop for n categories and define a function with the same name of the categories so
// we can easily handle 100 each task will do there independent work 


}