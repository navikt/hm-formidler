FROM node:alpine as basebuilder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn add http-proxy-middleware

FROM navikt/node-express:12.2.0-alpine
WORKDIR /app

COPY init.sh /init-scripts/init.sh
RUN chmod +x /init-scripts/init.sh

COPY build-server/ ./server
COPY build/ ./build
COPY --from=basebuilder /app/node_modules /app/node_modules
ENV NODE_ENV=production
EXPOSE 3000
