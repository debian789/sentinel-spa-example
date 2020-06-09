import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'sentinel-herramientas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentinel-herramientas';

  constructor(private router: Router) {
  }

  openSentinelEditorOnlineLocalStorage(id) {
    this.router.navigate(['sentinel-editor/online']);
    localStorage.setItem('online-editor-id', id);
  }

  openSentinelEditorOnlineSessionStorage(data) {
    this.router.navigate(['sentinel-editor/online']);
    sessionStorage.setItem('online-editor-data', JSON.stringify(data));
  }
}
