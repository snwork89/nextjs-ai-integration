"use client"

import type React from "react"

import { usePathname, useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  // Extract the current model from the pathname
  const currentModel = pathname.split("/")[1] || "openai"

  const handleTabChange = (value: string) => {
    router.push(`/${value}`)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">AI Chatbot Hub</h1>

      <Tabs value={currentModel} onValueChange={handleTabChange} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="openai">OpenAI</TabsTrigger>
          <TabsTrigger value="gemini">Gemini</TabsTrigger>
          <TabsTrigger value="cursor">Cursor</TabsTrigger>
        </TabsList>

        <div className="mt-4">{children}</div>
      </Tabs>
    </div>
  )
}
