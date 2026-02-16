import stepHandler from "../workflowsteps/stepflows.js"
export default async function runworkflow(userText,workflows){
    let currentData=userText;
    let results=[];
    for(const steps in workflows){
       const handler=stepHandler[workflows[steps]];
           if (!handler) {
      throw new Error(`Unable to run step: ${steps}`);
    } 
       const output=await handler(currentData);
       results.push({
        id:steps,
        input:currentData,
        output:output
       })
       currentData=output; 
    }
    return results;

}