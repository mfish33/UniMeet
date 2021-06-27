import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDesktopComponent } from './modules/about/components/about-desktop/about-desktop.component';
import { LoginDesktopComponent } from './modules/auth/login/components/login-desktop/login-desktop.component';
import { RegisterRoutingModule } from './modules/auth/register/register-routing.module';
import { HomeDesktopComponent } from './modules/home/components/home-desktop/home-desktop.component';

const routes: Routes = [
  { path:'', component:HomeDesktopComponent },
  { path:'about', component:AboutDesktopComponent },
  { path:'login', component:LoginDesktopComponent },
  { path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration:'top' }), RegisterRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
