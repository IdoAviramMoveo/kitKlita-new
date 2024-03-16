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
      { path: '', redirectTo: 'step-one', pathMatch: 'full' },
      { path: 'step-one', component: StepOneComponent },
      { path: 'step-two', component: StepTwoComponent },
    ],
  },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
