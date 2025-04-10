"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to default model route
    router.push("/openai")
  }, [router])

  return null // This page just redirects
}
