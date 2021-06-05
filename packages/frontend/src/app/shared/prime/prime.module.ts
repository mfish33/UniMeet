import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

const primeNgImports = [
  ButtonModule,
  InputTextModule,
  PasswordModule,
  DividerModule,
  DropdownModule,
  InputTextareaModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,...primeNgImports
  ],
  exports:primeNgImports
})
export class PrimeModule { }
