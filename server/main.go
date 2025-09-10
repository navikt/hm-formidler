package main

import (
	"os"

	"github.com/navikt/hotbff"
	"github.com/navikt/hotbff/decorator"
	"github.com/navikt/hotbff/proxy"
	"github.com/navikt/hotbff/texas"
)

func main() {
	opts := &hotbff.ServerOptions{
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
		IDP: texas.IdPorten,
		EnvKeys: &[]string{
			"SOKNAD_URL",
		},
	}
	hotbff.StartServer(opts)
}
