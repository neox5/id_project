import { Routes } from "@angular/router";

import { AuthGuard as Auth0Guard } from "@auth0/auth0-angular";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "login",
    pathMatch: "full",
    loadComponent: () =>
      import("./login/login.component").then((m) => m.LoginComponent),
  },
  {
    path: "auth0",
    pathMatch: "full",
    canActivate: [Auth0Guard],
    loadComponent: () =>
      import("./auth0/auth0.component").then((m) => m.Auth0Component),
  },
];
