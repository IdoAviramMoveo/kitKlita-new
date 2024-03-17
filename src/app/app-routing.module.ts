import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidUserTypeGuard } from './guards/valid-user-type.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';

const routes: Routes = [
  {
    path: 'registration/:userType',
    component: RegistrationComponent,
  },
  {
    path: 'registration',
    redirectTo: '/registration/general',
    pathMatch: 'full',
  },
  { path: '', redirectTo: '/registration/general', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
