FROM node:lts-alpine AS client-builder
WORKDIR /app
COPY client/package.json client/package-lock.json .npmrc ./
RUN npm ci
COPY client .
# Upgrade grep to support the --include option, required for i18n tests
RUN apk add --no-cache --upgrade grep
RUN npm run build

# build server
FROM golang:1.25.1-alpine AS server-builder
WORKDIR /app
COPY server ./
RUN go test -v ./... && go build .

# runtime
FROM gcr.io/distroless/static-debian12 AS runtime
WORKDIR /app

ENV TZ="Europe/Oslo"
EXPOSE 5000

COPY --from=client-builder /app/dist ./dist
COPY --from=server-builder /app/hm-formidler-server .

CMD [ "./hm-formidler-server" ]
