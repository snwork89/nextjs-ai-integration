"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import GeminiChatbot from "@/components/chatbots/gemini-chatbot"

export default function GeminiPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gemini Chat</CardTitle>
        <CardDescription>Chat with Google's Gemini models</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <GeminiChatbot />
      </CardContent>
    </Card>
  )
}
