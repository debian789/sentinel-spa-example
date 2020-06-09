import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'sentinel-editor-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {
  idRegla = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) {
      this.idRegla =this.activatedRoute.snapshot.params.id;
    } else if ( this.activatedRoute.snapshot.params.idRegla) {
      this.idRegla =this.activatedRoute.snapshot.params.idRegla;
    } else if ( this.activatedRoute.snapshot.queryParams.id) {
      this.idRegla = this.activatedRoute.snapshot.queryParams.id
    }
  }
}
