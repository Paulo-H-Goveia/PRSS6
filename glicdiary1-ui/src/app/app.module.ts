import { HttpClientModule } from '@angular/common/http';
import { SecurityModule } from './security/security.module';
import { MeasuresModule } from './measures/measures.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from './security/auth.service';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    TooltipModule,
    MeasuresModule,
    SecurityModule,
    HttpClientModule,
    CoreModule,
    UsersModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
