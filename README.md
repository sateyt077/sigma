# СИГМА

Маркетинговый сайт ООО «НПКП СИГМА» — поставки оптики, тепловизоров и оборудования.

## Стек

- Vite + React + TypeScript
- CSS Modules
- React Router

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Сборка попадает в `dist/`.

## Деплой на Cloudflare

Сайт публикуется как Worker со static assets (SPA).

```bash
npm run deploy
```

Нужен вход в Cloudflare (`npx wrangler login`) или переменная окружения `CLOUDFLARE_API_TOKEN`.
