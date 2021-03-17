import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  providers: [],
  imports: [],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}