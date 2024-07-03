import { Hono } from "hono"

const app = new Hono()

app.get("/bye", (c) => {
  return c.text("bye, world")
})
export default app
