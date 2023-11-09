import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasuresListComponent } from './measures/measures-list/measures-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { MeasureRegisterComponent } from './measures/measure-register/measure-register.component';

const routes: Routes = [
  {path: 'measures', component: MeasuresListComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'measures/new', component: MeasureRegisterComponent},
  { path: 'measures/:id', component: MeasureRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
