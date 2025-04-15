"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ClaudeChatbot from "@/components/chatbots/claude-chatbot"

export default function CursorPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Claude Chat</CardTitle>
        <CardDescription>Chat with Claude AI</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <ClaudeChatbot />
      </CardContent>
    </Card>
  )
}
