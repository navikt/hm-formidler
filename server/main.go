package main

import (
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
		idp = ""
	}
}

func main() {
	opts := &hotbff.Options{
		BasePath: "/hjelpemidler/formidler/",
		RootDir:  "dist",
		DecoratorOpts: &decorator.Options{
			Context: "samarbeidspartner",
		},
		Proxy: &proxy.Map{
			"/api/": &proxy.Options{
				Target:      os.Getenv("API_URL"),
				StripPrefix: false,
				IDP:         texas.TokenX,
				IDPTarget:   os.Getenv("SOKNADSBEHANDLING_AUDIENCE"),
			},
			"/roller-api/": &proxy.Options{
				Target:      os.Getenv("HM_ROLLER_URL"),
				StripPrefix: true,
				IDP:         texas.TokenX,
				IDPTarget:   os.Getenv("HM_ROLLER_AUDIENCE"),
			},
		},
		IDP: idp,
		EnvKeys: &[]string{
			"SOKNAD_URL",
		},
	}
	hotbff.Start(opts)
}
