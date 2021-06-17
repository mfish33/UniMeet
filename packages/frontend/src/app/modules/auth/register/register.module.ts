import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { DesktopGetToKnowYouComponent } from './components/desktop-get-to-know-you/desktop-get-to-know-you.component';
import { RegisterDesktopBaseComponent } from './components/register-desktop-base/register-desktop-base.component';
import { DesktopInterestSelectorComponent } from './components/desktop-interest-selector/desktop-interest-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';
import { BioAndProfileComponent } from './components/bio-and-profile/bio-and-profile.component';

import { ImageCropperModule } from 'ngx-image-cropper';
import { SlidingCardComponent } from './components/sliding-card/sliding-card.component';

@NgModule({
  declarations: [
    DesktopGetToKnowYouComponent, 
    RegisterDesktopBaseComponent, 
    DesktopInterestSelectorComponent, SocialMediasComponent, BioAndProfileComponent, SlidingCardComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ImageCropperModule
  ]
})
export class RegisterModule { }
