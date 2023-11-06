import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { MeasuresService } from '../measures/measure.service';
import { AuthService } from '../security/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService,
    MeasuresService,
    MessageService,
    ConfirmationService,
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class CoreModule { }
