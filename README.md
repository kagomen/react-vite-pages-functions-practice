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

```
mkdir wrangler.toml .dev.vars
```

## 環境変数・シークレット

```
wrangler secret put HOGEHOGE
```

上記コマンドは wrangler.toml で プロジェクト名を設定しないと使用できない
わざわざそのためにファイルを増やしたくない場合は Pages のダッシュボードでシークレットを管理する

デプロイは Git で管理するので deploy コマンドは使用しない

# 参考

- https://developers.cloudflare.com/workers/wrangler/commands/#pages
- https://github.com/yusukebe/hono-examples/tree/main/projects/pages-vite-minimal
- https://github.com/t6adev/hono-react-cloudflare-pages-sample
