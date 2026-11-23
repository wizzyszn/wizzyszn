// Vercel counterpart of the Worker route in src/worker/index.ts, so the demo
// contact form behaves the same when the site is served by Vercel.

type Body = { name?: unknown; email?: unknown; message?: unknown }

type Request = { method?: string; body?: unknown }

type Response = {
  status: (code: number) => {
    json: (body: unknown) => void
    end: () => void
  }
  setHeader: (name: string, value: string) => void
}

export default function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    res.setHeader('allow', 'POST')
    res.status(405).json({ error: 'Method not allowed.' })
    return
  }

  const raw = req.body
  const body: Body | null = typeof raw === 'string' ? safeParse(raw) : (raw as Body | null)

  if (typeof body?.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    res.status(400).json({ error: 'Enter a valid email address.' })
    return
  }
  if (typeof body.message !== 'string' || !body.message.trim() || body.message.length > 2000) {
    res.status(400).json({ error: 'Write a few words about the project.' })
    return
  }

  res.status(200).json({ ok: true, demo: true })
}

function safeParse(value: string): Body | null {
  try {
    return JSON.parse(value) as Body
  } catch {
    return null
  }
}
