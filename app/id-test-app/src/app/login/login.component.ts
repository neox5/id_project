import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [],
  template: `
    <table>
      <tr>
        <th>Name</th>
        <th>Action</th>
      </tr>
      @for (p of providers; track p.name) {
      <tr>
        <td>
          <img [src]="p.logo" alt="{{ p.name }} logo" />
        </td>
        <td><button (click)="p.loginFn()">Login</button></td>
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
      loginFn: () => {
        console.log("Logging in with Auth0");
      },
    },
    {
      name: "Keycloak",
      logo: "assets/logos/keycloak.svg",
      loginFn: () => {
        console.log("Logging in with Keycloak");
      },
    },
    {
      name: "Zitadel",
      logo: "assets/logos/zitadel.svg",
      loginFn: () => {
        console.log("Logging in with Zitadel");
      },
    },
    {
      name: "Google",
      logo: "assets/logos/google.svg",
      loginFn: () => {
        console.log("Logging in with Google");
      },
    },
    {
      name: "Firebase",
      logo: "assets/logos/firebase.svg",
      loginFn: () => {
        console.log("Logging in with Firebase");
      },
    },
    {
      name: "Github",
      logo: "assets/logos/github.svg",
      loginFn: () => {
        console.log("Logging in with Github");
      },
    },
    {
      name: "Apple",
      logo: "assets/logos/apple.svg",
      loginFn: () => {
        console.log("Logging in with Apple");
      },
    },
    {
      name: "Microsoft",
      logo: "assets/logos/microsoft.svg",
      loginFn: () => {
        console.log("Logging in with Microsoft");
      },
    },
    {
      name: "Meta",
      logo: "assets/logos/meta.svg",
      loginFn: () => {
        console.log("Logging in with Meta");
      },
    },
  ];
}
