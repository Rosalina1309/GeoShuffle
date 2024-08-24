import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/Countries/countries/countries.component';
import { RandomButtonComponent } from './components/RandomButton/random-button/random-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    RandomButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
