import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {Router} from "@angular/router";
import { singleSpaPropsSubject, SingleSpaProps } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sentinel-herramientas-list-rules',
  templateUrl: './list-rules.component.html',
  styleUrls: ['./list-rules.component.scss']
})
export class ListRulesComponent implements OnInit, OnDestroy {

  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  title = 'app1';
  msgFromMicro="";

  constructor(private router:Router, private ChangeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props;
        this.lookForEvents();
      }
    );
  }

  lookForEvents(){
    this.singleSpaProps['EventBus'].on('msgFrmMicro2',(data)=>{
      this.msgFromMicro=data;
      this.ChangeDetectorRef.detectChanges();
    });
  }

  openSentinelEditorOnline(id) {
      this.singleSpaProps['EventBus'].emit({name:'msgFrmMicro1',data:id.idRegla});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
