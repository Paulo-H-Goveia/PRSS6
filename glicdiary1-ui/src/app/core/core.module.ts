import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

import { ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MeasuresService } from '../measures/measure.service';
import { AuthService } from '../security/auth.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { NotAuthorizedComponent } from './not-authorized.component';

registerLocaleData(localePt);

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
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    Title,
    DatePipe
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class CoreModule { }
