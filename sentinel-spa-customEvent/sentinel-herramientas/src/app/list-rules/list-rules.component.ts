import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'sentinel-herramientas-list-rules',
  templateUrl: './list-rules.component.html',
  styleUrls: ['./list-rules.component.scss']
})
export class ListRulesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openSentinelEditorOnline(id) {
    const event =  new CustomEvent('sentinel-editor-online' , { detail: id });
    document.dispatchEvent(event);

    this.router.navigate(['sentinel-editor/online']);
  }

}
