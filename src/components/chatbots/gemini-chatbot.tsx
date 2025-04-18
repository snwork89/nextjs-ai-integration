"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { stat } from "fs";

export default function OpenAIChatbot() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    error,
    isLoading,
  } = useChat({
    api: "/api/chat/gemini",
    id: "gemini", // Add a unique ID to maintain separate chat state
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log("iusLoading", isLoading);

  return (
    <div className="flex flex-col h-[60vh]">
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Error: {error.message}
        </div>
      )}
      <ScrollArea className="flex-1 p-4 mb-4 border rounded-md">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="relative w-12 h-12">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-600 rounded-full animate-gemini"
                  style={{
                    transform: `rotate(${i * 45}deg) translate(20px)`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}

              <style jsx>{`
                @keyframes gemini {
                  0%,
                  100% {
                    transform: scale(1);
                    opacity: 0.3;
                  }
                  50% {
                    transform: scale(1.5);
                    opacity: 1;
                  }
                }
                .animate-gemini {
                  animation: gemini 1s infinite ease-in-out;
                }
              `}</style>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          disabled={status == "streaming"}
          className="flex-1"
        />
        <Button type="submit" size="icon" disabled={status == "streaming"}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
