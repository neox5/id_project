import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AuthService } from "@auth0/auth0-angular";
import { of } from "rxjs";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <table>
      <tr>
        <th>ID Provider</th>
        <th>Action</th>
      </tr>
      @for (p of providers; track p.name) {
      <tr>
        <td>
          <a routerLink="/auth0"
            ><img [src]="p.logo" alt="{{ p.name }} logo"
          /></a>
        </td>
        <td>
          @if (p.isAuthenticated$ | async) {
          <button class="danger" (click)="p.logoutFn()">Logout</button>
          } @else {
          <button (click)="p.loginFn()">Login</button>
          }
        </td>
      </tr>
      }
    </table>
  `,
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  providers = [
    {
      name: "Auth0",
      logo: "assets/logos/auth0.svg",
      loginFn: () => this._auth0.loginWithRedirect(),
      isAuthenticated$: this._auth0.isAuthenticated$,
      logoutFn: () => {
        console.log("location:", window.location.origin);
        this._auth0.logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        });
      },
    },
    {
      name: "Keycloak",
      logo: "assets/logos/keycloak.svg",
      loginFn: () => {
        console.log("Logging in with Keycloak");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Keycloak");
      },
    },
    {
      name: "Zitadel",
      logo: "assets/logos/zitadel.svg",
      loginFn: () => {
        console.log("Logging in with Zitadel");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Zitadel");
      },
    },
    {
      name: "Google",
      logo: "assets/logos/google.svg",
      loginFn: () => {
        console.log("Logging in with Google");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Google");
      },
    },
    {
      name: "Firebase",
      logo: "assets/logos/firebase.svg",
      loginFn: () => {
        console.log("Logging in with Firebase");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Firebase");
      },
    },
    {
      name: "Github",
      logo: "assets/logos/github.svg",
      loginFn: () => {
        console.log("Logging in with Github");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Github");
      },
    },
    {
      name: "Apple",
      logo: "assets/logos/apple.svg",
      loginFn: () => {
        console.log("Logging in with Apple");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Apple");
      },
    },
    {
      name: "Microsoft",
      logo: "assets/logos/microsoft.svg",
      loginFn: () => {
        console.log("Logging in with Microsoft");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Microsoft");
      },
    },
    {
      name: "Meta",
      logo: "assets/logos/meta.svg",
      loginFn: () => {
        console.log("Logging in with Meta");
      },
      isAuthenticated$: of(false),
      logoutFn: () => {
        console.log("Logging out with Meta");
      },
    },
  ];
  constructor(private _auth0: AuthService) {}
}
