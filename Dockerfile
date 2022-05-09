FROM node:16.15.0-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY client/package.json ./client/
COPY server/package.json ./server/

RUN yarn install --frozen-lockfile --silent

COPY . .

RUN yarn workspaces run build

FROM node:16.15.0-alpine as server-dependencies

WORKDIR /app

COPY package.json yarn.lock ./
COPY server/package.json ./server/

RUN yarn workspace server install --frozen-lockfile --production --silent

FROM gcr.io/distroless/nodejs:16 as runtime

WORKDIR /app

ENV NODE_ENV=production
EXPOSE 3000

COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server/dist ./server/dist

WORKDIR /app/server

COPY --from=server-dependencies /app/node_modules ./node_modules

CMD [ "-r", "dotenv/config", "dist/server.js" ]
