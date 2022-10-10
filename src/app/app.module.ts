import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortifolioComponent } from './portifolio.component';

@NgModule({
  declarations: [
    PortifolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PortifolioComponent]
})
export class AppModule { }
