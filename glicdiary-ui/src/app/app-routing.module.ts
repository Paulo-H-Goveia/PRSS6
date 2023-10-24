import { MeasureRegisterComponent } from './measures/measure-register/measure-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './security/login-form/login-form.component';
import { MeasuresListComponent } from './measures/measures-list/measures-list.component';

const routes: Routes = [
  { path: 'measures', component: MeasuresListComponent },
  { path: 'measures/new', component: MeasureRegisterComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
