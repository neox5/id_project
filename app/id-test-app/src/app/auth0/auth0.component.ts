import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-auth0",
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <tr>
        <th>Property</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>isLoading$</td>
        <td>{{ authService.isLoading$ | async }}</td>
      </tr>
      <tr>
        <td>isAuthenticated$</td>
        <td>{{ authService.isAuthenticated$ | async }}</td>
      </tr>
      <tr>
        <td>user$</td>
        <td>{{ (authService.user$ | async)?.email }}</td>
      </tr>
      <tr>
        <td>idTokenClaims$</td>
        <td>{{ authService.idTokenClaims$ | async | json }}</td>
      </tr>
      <tr>
        <td>error$</td>
        <td>{{ (authService.error$ | async)}}</td>
      </tr>
    </table>
  `,
  styleUrls: ["./auth0.component.scss"],
})
export class Auth0Component {
  constructor(public authService: AuthService) {}
}
