# 概要

- CORS 設定する必要ない
- フロントとバックでサーバを 2 つ建てなくていい
- Vite, React, Hono！

# 環境構築

```
npm create vite@latest
npm i hono
```

```json
  "scripts": {
    "dev": "wrangler pages dev --compatibility-date=2024-07-04 -- npx vite",
  }
```

- 本番環境のシークレットは Pages のダッシュボードで管理する
- デプロイは Git で管理するので deploy コマンドは（書いてるけど）特に必要ない

# 参考

- https://developers.cloudflare.com/workers/wrangler/commands/#pages
- https://github.com/yusukebe/hono-examples/tree/main/projects/pages-vite-minimal
- https://github.com/t6adev/hono-react-cloudflare-pages-sample
