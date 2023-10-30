import { MeasuresService } from '../measures/measure.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../security/auth.service';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    MeasuresService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
