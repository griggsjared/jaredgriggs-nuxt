FROM node AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run generate

FROM nginx:alpine

COPY --from=builder /app/.output/public /usr/share/nginx/html
