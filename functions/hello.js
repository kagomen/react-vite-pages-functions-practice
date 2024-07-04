import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'

const app = new Hono()

app.get('/hello', (c) => {
  return c.text(c.env.MESSAGE)
})

export const onRequest = handle(app)
