import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDesktopComponent } from './modules/home/components/home-desktop/home-desktop.component';

const routes: Routes = [
  { path:'', component:HomeDesktopComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
