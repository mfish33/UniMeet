import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDesktopBaseComponent } from './components/register-desktop-base/register-desktop-base.component'
import { RegistrationForm } from './models/RegistrationForm';


const children:Routes = RegistrationForm.map((step, i) => ({
  path: step.path,
  component: step.component,
  data: { routeIdx: i }
}))


const routes: Routes = [
  { 
    path:'register', 
    component:RegisterDesktopBaseComponent, 
    children:[
      ...children,
      { path: '**', redirectTo: children[0].path }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
