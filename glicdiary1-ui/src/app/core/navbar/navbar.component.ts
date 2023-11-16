import { AuthService } from './../../security/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  displayingMenu = false;

  constructor(public auth: AuthService) { }

}
