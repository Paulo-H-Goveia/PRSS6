import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Router } from '@angular/router';
import { AuthService } from './../../security/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  displayingMenu = false;

  constructor(
    public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
    ) { }

    logout(): void {
      this.auth.logout()
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

}
