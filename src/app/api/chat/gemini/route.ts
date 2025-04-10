import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Note: In a real application, you would use the Gemini provider
// This is a placeholder using OpenAI as an example
export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai("gpt-4o"), // Replace with Gemini model when available
    messages,
    system: "You are Gemini, Google's AI assistant. Answer as if you were Gemini.",
  })

  return result.toDataStreamResponse()
}
