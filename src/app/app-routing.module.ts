import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './components/registration/registration.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    children: [
      { path: '', redirectTo: 'user/step-one', pathMatch: 'full' },

      {
        path: ':userType',
        redirectTo: ':userType/step-one',
        pathMatch: 'full',
      },
      { path: ':userType/step-one', component: StepOneComponent },
      { path: ':userType/step-two', component: StepTwoComponent },
    ],
  },
  { path: '', redirectTo: '/registration/user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
