import Modelcall from "../config/groqconfig.js"
const  stepHandlers={
    cleantext:async(text)=>{
       const prompt1=  `Clean the following text.
- Remove extra spaces, emojis, URLs, and special characters
- Fix basic grammar if needed
- Do NOT change the meaning
- Return only the cleaned text
Text:
${text}
`
   const result1=await Modelcall(prompt1)                  
       return result1
    },
    summarize:async(text)=>{
        const prompt2= `
        Summarize the following text in 3–4 concise sentences.
        - Keep the main idea only
        - No examples
        - No extra explanation
        Text:
        ${text}
        `
      const result2=await Modelcall(prompt2)
        return result2;
    },
    ExtractKeyPoints:async(text)=>{
           const prompt3= `
       Extract the 5 most important key points from the following text.
    - Be concise
    - Each point should be one short sentence
    - Return as a plain list separated by new lines
    - Do NOT add numbering symbols
        ${text}  `
      const result3=await Modelcall(prompt3)
        return result3;
    },
    TagCategory:async(text)=>{
              const prompt4= `
    Assign ONE category to the following text.
    Choose only from:
    Technology, Education, Finance, Health, Business, Entertainment, Sports, Science, Others
    Return only the category name.
        ${text}  `
      const result4=await Modelcall(prompt4)
        return result4;
    },
}
export default stepHandlers