import { openai } from "@ai-sdk/openai"
import { streamText,Message } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Note: In a real application, you would use the Gemini provider
// This is a placeholder using OpenAI as an example
export async function POST(req: Request) {
  
}
