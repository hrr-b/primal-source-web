import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const kitApiKey = process.env.KIT_API_KEY
    if (!kitApiKey) {
      console.error('KIT_API_KEY not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const res = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': kitApiKey,
      },
      body: JSON.stringify({
        email_address: email,
        state: 'active',
        fields: { source: 'primal-source-web' },
      }),
    })

    const data = await res.json()
    if (!res.ok) {
      console.error('Kit error:', data)
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
