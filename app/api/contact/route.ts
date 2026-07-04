import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // Basic validation
    if (!body.email || !body.name || !body.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    const apiUrl = process.env.TWENTY_API_URL
    if (!apiUrl) {
      return NextResponse.json({ error: 'CRM endpoint not configured' }, { status: 500 })
    }
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (!res.ok) {
      return NextResponse.json({ error: 'CRM request failed', details: data }, { status: res.status })
    }
    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: err }, { status: 500 })
  }
}
