import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListRulesComponent } from './list-rules/list-rules.component';
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ListRulesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
