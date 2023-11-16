import { RouterModule } from '@angular/router';
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
import { PageNotFoundComponent } from './page-not-found.component';
import { Title } from '@angular/platform-browser';
import { NotAuthorizedComponent } from './not-authorized.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    AuthService,
    MeasuresService,
    MessageService,
    ConfirmationService,
    ErrorHandlerService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class CoreModule { }
