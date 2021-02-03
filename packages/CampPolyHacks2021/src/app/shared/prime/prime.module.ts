import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'

const primeNgImports = [
  ButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,...primeNgImports
  ],
  exports:primeNgImports
})
export class PrimeModule { }
