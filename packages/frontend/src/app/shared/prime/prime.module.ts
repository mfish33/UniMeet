import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


const primeNgImports = [
  ButtonModule,
  InputTextModule,
  PasswordModule,
  DividerModule,
  DropdownModule,
  InputTextareaModule,
  ToastModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,...primeNgImports
  ],
  providers:[MessageService],
  exports:primeNgImports
})
export class PrimeModule { }
