import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime/prime.module';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { ParallaxTitleComponent } from './components/parallax-title/parallax-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { DragFileDirective } from './directives/dragFile.directive';

const components = [
  BackgroundImageComponent,
  ParallaxTitleComponent,
  FooterComponent,
  DragFileDirective
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports:[PrimeModule,...components]
})
export class SharedModule { }
