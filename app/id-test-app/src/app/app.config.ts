import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

import { AuthModule } from "@auth0/auth0-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: "dev-rbtgyrundj0306dt.eu.auth0.com",
        clientId: "3XN4Okgt1aonWbalTM3hd3D1VYWZJhl2",
        authorizationParams: {
          redirect_uri: window.location.origin + "/auth0",
        },
        cacheLocation: "localstorage",
      })
    ),
  ],
};
