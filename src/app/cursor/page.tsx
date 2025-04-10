"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CursorChatbot from "@/components/chatbots/cursor-chatbot"

export default function CursorPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cursor Chat</CardTitle>
        <CardDescription>Chat with Cursor AI</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <CursorChatbot />
      </CardContent>
    </Card>
  )
}
