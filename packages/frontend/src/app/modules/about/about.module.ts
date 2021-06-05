import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDesktopComponent } from './components/about-desktop/about-desktop.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AboutDesktopComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutModule { }
