import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidUserTypeGuard } from './guards/valid-user-type.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';

// const routes: Routes = [
//   {
//     path: 'registration',
//     component: RegistrationComponent,
//     children: [
//       { path: '', redirectTo: 'general/step-one', pathMatch: 'full' },

//       {
//         path: ':userType',
//         redirectTo: ':userType/step-one',
//         pathMatch: 'full',
//       },
//       { path: ':userType/step-one', component: StepOneComponent },
//       { path: ':userType/step-two', component: StepTwoComponent },
//     ],
//   },
//   { path: '', redirectTo: '/registration/general', pathMatch: 'full' },
// ];

const routes: Routes = [
  {
    path: 'registration/:userType',
    component: RegistrationComponent,
    canActivate: [ValidUserTypeGuard],
    children: [
      { path: '', redirectTo: 'step-one', pathMatch: 'full' },
      { path: 'step-one', component: StepOneComponent },
      { path: 'step-two', component: StepTwoComponent },
    ],
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
