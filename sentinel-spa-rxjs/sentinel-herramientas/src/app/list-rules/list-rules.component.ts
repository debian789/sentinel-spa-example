import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { singleSpaPropsSubject, SingleSpaProps } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sentinel-herramientas-list-rules',
  templateUrl: './list-rules.component.html',
  styleUrls: ['./list-rules.component.scss']
})
export class ListRulesComponent implements OnInit {

  singleSpaProps: SingleSpaProps = null;
  subscription: Subscription = null;

  constructor(private router:Router) { }

  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => this.singleSpaProps = props
    )
  }

  openSentinelEditorOnline(id) {
     this.singleSpaProps['sendData'].next({idRegla:id});
     this.router.navigate(['sentinel-editor/online']);
  }
}
