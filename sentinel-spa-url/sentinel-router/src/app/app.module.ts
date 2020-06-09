import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
