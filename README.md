# hm-formidler

Flate for hjelpemiddelformidlere med oversikt over saker - frontend

### Lokal køyring

1. start backend
    [hm-soknadsbehandling](https://github.com/navikt/hm-soknadnadsbehandling) (for henting av saker)
    [hm-soknad-api](https://github.com/navikt/hm-soknad-api) (for innlogging)

2. bygg og start front-end:

    ```
    yarn install
    yarn build
    yarn devd
    ```
3. Logg inn

    Naviger til localhost:5000 for å trigge login mot mock-oauth-server
    Mock-oauth-server logger deg automatisk inn, fødselsnummer og token-varighet kan du endre i 
    docker-compose fil som setter opp mock-server: https://github.com/navikt/hm-soknad-api/tree/master/docker-compose


    Naviger tilbake til localhost:3000, der du no vil vere logga inn.
