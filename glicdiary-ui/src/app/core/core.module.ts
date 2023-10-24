import { MeasureService } from './../measures/measure.service';
import { AuthService } from './../security/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthService,
    MeasureService
  ]
})
export class CoreModule { }
