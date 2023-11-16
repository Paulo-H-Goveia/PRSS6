import { NotAuthorizedComponent } from './core/not-authorized.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasuresListComponent } from './measures/measures-list/measures-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { MeasureRegisterComponent } from './measures/measure-register/measure-register.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';

const routes: Routes = [
  {path: 'measures', component: MeasuresListComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'measures/new', component: MeasureRegisterComponent},
  { path: 'users/new', component: UserRegisterComponent },
  { path: 'measures/:id', component: MeasureRegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
