# Cloudflare Pages Functions

- `hello.js`に以下を記述した場合、エンドポイントは`/hello/bye`となる
  ```js
  app.get('/bye', (c) => {
    return c.text('Bye, world');
  });

  export default app;
  ```

