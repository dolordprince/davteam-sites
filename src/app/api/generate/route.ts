import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const { brief } = await req.json()

  try {
    const response = await fetch('https://dancing-granite-shortness.ngrok-free.dev/build', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify({ brief }),
      signal: AbortSignal.timeout(120000)
    })

    const data = await response.json()
    return NextResponse.json({ success: true, ...data })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
