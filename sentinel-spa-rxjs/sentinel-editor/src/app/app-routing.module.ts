import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmptyRouteComponent} from './empty-route/empty-route.component'
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from "./app.component";
import {OnlineComponent} from "./online/online.component";


const routes: Routes = [
  {path: 'sentinel-editor/online/:id', component: OnlineComponent},
  {path: 'sentinel-editor/online', component: OnlineComponent},
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
})
export class AppRoutingModule {
}
