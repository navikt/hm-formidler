FROM node:18-alpine as client-builder

WORKDIR /app

COPY client/package.json client/yarn.lock ./

RUN --mount=type=secret,id=NODE_AUTH_TOKEN \
    echo '//npm.pkg.github.com/:_authToken='$(cat /run/secrets/NODE_AUTH_TOKEN) >> .npmrc

RUN yarn install --frozen-lockfile --silent

COPY client .

# Upgrade grep to support the --include option, required for i18n tests
RUN apk add --no-cache --upgrade grep
RUN yarn build

FROM node:18-alpine as server-builder

WORKDIR /app

COPY server/package.json server/yarn.lock ./

RUN --mount=type=secret,id=NODE_AUTH_TOKEN \
    NODE_AUTH_TOKEN=$(cat /run/secrets/NODE_AUTH_TOKEN) \
    yarn install --frozen-lockfile --silent

COPY server .

RUN yarn build

FROM node:18-alpine as server-dependencies

WORKDIR /app

COPY server/package.json server/yarn.lock ./

RUN --mount=type=secret,id=NODE_AUTH_TOKEN \
    NODE_AUTH_TOKEN=$(cat /run/secrets/NODE_AUTH_TOKEN) \
    yarn install --frozen-lockfile --production --silent

FROM gcr.io/distroless/nodejs:18 as runtime

WORKDIR /app

ENV NODE_ENV=production
EXPOSE 3000

COPY --from=client-builder /app/dist ./client/dist
COPY --from=server-builder /app/dist ./server/dist

WORKDIR /app/server

COPY --from=server-dependencies /app/node_modules ./node_modules

CMD [ "-r", "dotenv/config", "dist/server.js" ]
