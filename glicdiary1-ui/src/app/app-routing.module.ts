import { MeasureRegisterComponent } from './measures/measure-register/measure-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './security/login-form/login-form.component';
import { MeasuresListComponent } from './measures/measures-list/measures-list.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'measures', pathMatch: 'full' },
  {
    path: 'measures/:id',
    component: MeasureRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_MEASURE']}
  },
  {
    path: 'measures',
    component: MeasuresListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_MEASURE']}
  },
  {
    path: 'measures/new',
    component: MeasureRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_MEASURE'] }
  },
  {
    path: 'users/new',
    component: UserRegisterComponent
  },
  { path: 'login', component: LoginFormComponent},
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
