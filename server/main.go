package main

import (
	"net/http"
	"os"

	"github.com/navikt/hotbff"
	"github.com/navikt/hotbff/decorator"
	"github.com/navikt/hotbff/proxy"
	"github.com/navikt/hotbff/texas"
)

var (
	useMSW = os.Getenv("USE_MSW") == "true"
	idp    = texas.IDPorten
)

func init() {
	if useMSW {
		idp = nil
	}
}

func main() {
	opts := &hotbff.Options{
		BasePath: "/hjelpemidler/formidler/",
		RootDir:  "dist",
		DecoratorOpts: &decorator.Options{
			Context: "samarbeidspartner",
		},
		Proxy: proxy.Map{
			"/api/": &proxy.Options{
				Target:      os.Getenv("API_URL"),
				StripPrefix: false,
				IDPTarget:   os.Getenv("SOKNADSBEHANDLING_AUDIENCE"),
			},
			"/roller-api/": &proxy.Options{
				Target:      os.Getenv("HM_ROLLER_URL"),
				StripPrefix: true,
				IDPTarget:   os.Getenv("HM_ROLLER_AUDIENCE"),
			},
			"/soknad-api/": &proxy.Options{
				Target:      os.Getenv("HM_SOKNAD_API_URL"),
				StripPrefix: true,
				IDPTarget:   os.Getenv("HM_SOKNAD_API_AUDIENCE"),
			},
			"/hotsak-api/": &proxy.Options{
				Target:      os.Getenv("HOTSAK_API_URL"),
				StripPrefix: true,
				IDPTarget:   os.Getenv("HOTSAK_API_SCOPE"),
			},
		},
		IDP: idp,
		EnvKeys: []string{
			"SOKNAD_URL",
		},
	}
	mux := http.NewServeMux()
	hotbff.Start(mux, opts)
}
