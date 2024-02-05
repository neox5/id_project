import { Routes } from "@angular/router";

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
];
