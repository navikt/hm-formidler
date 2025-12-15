# hm-formidler

Flate for hjelpemiddelformidlere med oversikt over saker - frontend

Koden er delt i to separate moduler:

- `server` – Go-backend
- `client` – React-frontend

## Kom i gang

### Forutsetninger

- Node ≥ 20
- Go (for serveren)

### PNPM

Prosjektet bruker **pnpm** som pakkehåndterer. Hvis du:

- aldri har brukt pnpm før, eller
- har klonet repoet tidligere da det brukte npm

gjør følgende først:

```bash
corepack enable
```

Deretter, én gang etter at du har hentet ned pnpm-endringene:

```bash
# i prosjektroten
rm -rf node_modules package-lock.json
pnpm install

# i client
cd client
rm -rf node_modules package-lock.json
pnpm install
```

Etter dette holder det med:

- `pnpm install` i rot når du får nye root-avhengigheter
- `cd client && pnpm install` når `client/package.json` endrer seg

### Lokal kjøring med mockede data

1. `pnpm install` (for å installere nav-dekoratoren-moduler så må man logge npm.pkg.github.com med PAT første gang. Se instrukser i [nav-dekoratoren-moduler README](https://github.com/navikt/nav-dekoratoren-moduler#ved-lokal-kj%C3%B8ring))

2. Start applikasjonen med `pnpm run dev`. Da brukes [Mock Service Worker](https://mswjs.io/) for å mocke API-endepunkter, slik at man ikke trenger å starte noen backend.
   
3. Gå til `localhost:3000`

### Server

Installer Go:

```bash
brew install go
```

Legg til støtte for Go i Visual Studio Code [https://marketplace.visualstudio.com/items?itemName=golang.Go](https://marketplace.visualstudio.com/items?itemName=golang.Go).
