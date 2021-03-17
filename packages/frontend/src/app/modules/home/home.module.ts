import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDesktopComponent } from './components/home-desktop/home-desktop.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [HomeDesktopComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class HomeModule { }
