"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import OpenAIChatbot from "@/components/chatbots/openai-chatbot"

export default function OpenAIPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>OpenAI Chat</CardTitle>
        <CardDescription>Chat with OpenAI's GPT models like GPT-4o</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <OpenAIChatbot />
      </CardContent>
    </Card>
  )
}
