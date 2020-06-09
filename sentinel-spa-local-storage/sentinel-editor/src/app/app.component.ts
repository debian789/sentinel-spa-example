import {Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sentinel-editor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'sentinel-editor';
  ngOnInit(): void {
  }
}
