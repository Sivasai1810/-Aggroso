import dotenv from "dotenv"
dotenv.config()
import { Groq } from 'groq-sdk';

const groq = new Groq({
    apiKey:process.env.GROQ_API_KEY
});
const Modelcall=async(giventask)=>{
const response = await groq.chat.completions.create({
  "messages": [
    {
      "role": "user",
      "content": giventask
    }
  ],
  "model": "openai/gpt-oss-120b",
  "temperature": 1,
  "max_completion_tokens": 8192,
  "top_p": 1,
  "stream": false,
  "reasoning_effort": "medium",
  "stop": null
});
  return response.choices[0].message.content
}
export default Modelcall;