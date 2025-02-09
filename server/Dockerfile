FROM node:18 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

FROM node:18 AS runner
WORKDIR /app
COPY --from=builder /app .
CMD ["node", "dist/main.js"]
