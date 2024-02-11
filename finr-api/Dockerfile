FROM oven/bun

WORKDIR /app

RUN apt-get update && apt-get install -y openssl libssl-dev

COPY . .

RUN bun install --production

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000