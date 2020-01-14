import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { AddressCardComponent } from './address-card/address-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
