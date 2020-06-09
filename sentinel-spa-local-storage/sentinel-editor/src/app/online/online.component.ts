import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'sentinel-editor-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit, OnDestroy {
  idRegla = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('online-editor-id')) {
      this.idRegla = localStorage.getItem('online-editor-id');
    } else if (sessionStorage.getItem('online-editor-data')) {
      const data = JSON.parse(sessionStorage.getItem('online-editor-data'));
      this.idRegla = data['idRegla'];
    }
  }

  ngOnDestroy(): void {
    localStorage.setItem('online-editor-id', '');
    sessionStorage.setItem('online-editor-data', '');
  }
}
