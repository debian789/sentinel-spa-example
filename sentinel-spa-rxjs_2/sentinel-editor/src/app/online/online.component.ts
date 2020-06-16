import {Component, OnDestroy, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { singleSpaPropsSubject, SingleSpaProps } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';


@Component({
  selector: 'sentinel-editor-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit, OnDestroy {
  idRegla = '';
  title = 'app2';
  titleToPass="";
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ChangeDetectorRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props;
        console.log(props);
        this.lookForEvents();
      }
    );
  }

  lookForEvents(){
    this.singleSpaProps['EventBus'].on('msgFrmMicro1',(data)=>{
      debugger
      this.idRegla = data;
      this.ChangeDetectorRef.detectChanges();
    });
  }
  sendMsg(){
    this.singleSpaProps['EventBus'].emit({name:'msgFrmMicro2',data:this.titleToPass});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
