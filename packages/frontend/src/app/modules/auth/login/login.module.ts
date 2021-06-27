import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDesktopComponent } from './components/login-desktop/login-desktop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LoginDesktopComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
