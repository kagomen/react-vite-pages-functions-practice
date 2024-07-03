import { Hono } from "hono"
import { handle } from "hono/cloudflare-pages"

const app = new Hono()

app.get("/bye", (c) => {
  return c.text("bye, world")
})

export const onRequest = handle(app)
