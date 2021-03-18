# hm-formidler

Flate for hjelpemiddelformidlere med oversikt over søknader - frontend

### Lokal køyring

1. start backend
    [hm-soknadsbehandling](https://github.com/navikt/hm-soknadnadsbehandling) (for henting av søknadar)
    [hm-soknad-api](https://github.com/navikt/hm-soknad-api) (for innlogging)

2. bygg og start front-end:

    ```
    yarn install
    yarn build
    yarn devd
    ```
3. Logg inn

    Naviger til localhost:5000 slik at du kjem til Mock OAuth2 Server Sign-in og fyll inn
    ```
    12345678910 i 'Enter any user/subject' (for at DKIF-mock skal fungere må du bruke dette fnr)
    Level4 i 'Optional acr claim value'
    ```
    Naviger tilbake til localhost:3000, der du no vil vere logga inn.
