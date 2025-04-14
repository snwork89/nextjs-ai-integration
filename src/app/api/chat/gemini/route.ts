import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, Message } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

export const runtime = "edge";

const generateId = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrompt = (message: Message[]): Message[] => {
  return [
    { id: generateId(), role: "user", content: "You're HealthCare chatboat" },
    ...message.map((x) => ({
      id: x.id || generateId(),
      role: x.role,
      content: x.content,
    })),
  ];
};

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const stream =  streamText({
    model: google("gemini-1.5-pro"),
    messages: buildGoogleGenAIPrompt(messages),
    temperature: 0.7,
  });

  return stream.toDataStreamResponse();
}
