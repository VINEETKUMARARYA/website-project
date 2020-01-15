import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    AddressCardComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainComponentComponent,
    SidebarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
