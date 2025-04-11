import { openai } from "@ai-sdk/openai"
import { streamText ,generateText} from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {

  
  const { messages } = await req.json()
  
  try{
    const result = streamText({
      model: openai("gpt-4o"),
      messages,
    })
  
    return result.toDataStreamResponse()
  }
  catch(err){
    console.log("err is",err)
  }

}
