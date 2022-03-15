FROM node:16.14.0-alpine as basebuilder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build


FROM gcr.io/distroless/nodejs:16
WORKDIR /app

ENV NODE_ENV=production
EXPOSE 3000

COPY --from=basebuilder /app/node_modules ./node_modules
COPY --from=basebuilder /app/build-server/ ./server
COPY --from=basebuilder /app/build/ ./build

CMD [ "-r", "dotenv/config", "server/server.js" ]