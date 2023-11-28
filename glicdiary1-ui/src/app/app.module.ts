import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './security/auth.service';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { SecurityModule } from './security/security.module';
import { MeasuresModule } from './measures/measures.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
