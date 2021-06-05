import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDesktopBaseComponent } from './components/register-desktop-base/register-desktop-base.component'
import { DesktopGetToKnowYouComponent } from './components/desktop-get-to-know-you/desktop-get-to-know-you.component'
import { DesktopInterestSelectorComponent } from './components/desktop-interest-selector/desktop-interest-selector.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';
import { BioAndProfileComponent } from './components/bio-and-profile/bio-and-profile.component';

const routes: Routes = [
  { 
    path:'register', 
    component:RegisterDesktopBaseComponent, 
    children:[
      { path: 'info', component:DesktopGetToKnowYouComponent, data: { routeIdx: 0 }},
      { path:'interests', component:DesktopInterestSelectorComponent, data: { routeIdx: 1 } },
      {path: 'about', component:BioAndProfileComponent, data: { routeIdx: 2 } },
      { path:'social-medias', component:SocialMediasComponent, data: { routeIdx: 3 } },
      { path: '**', redirectTo:'info'}
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
