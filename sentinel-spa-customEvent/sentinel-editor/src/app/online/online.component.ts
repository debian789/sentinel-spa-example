import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
// import {singleSpaPropsSubject} from "../../../../../sentinel-spa-rxjs/sentinel-editor/src/single-spa/single-spa-props";
import { singleSpaPropsSubject, SingleSpaProps } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sentinel-editor-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit, OnDestroy {
  idRegla = '';
  singleSpaProps: SingleSpaProps = null;
  subscription: Subscription = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    const self = this;
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props

        document.addEventListener('sentinel-editor-online', (data) => {
          debugger;
          if (data['detail'] && data['detail'].idRegla) {
            self.idRegla = data['detail'].idRegla;
          } else if (data['detail']) {
           // self.idRegla = data['detail'];
            this.idRegla = data['detail'];
            console.log(self.idRegla);
          }
          data.stopPropagation();
          data.preventDefault();
          data.stopImmediatePropagation();
        }, false)


        // window.removeEventListener('', null,false);

      })

  }

  ngOnDestroy(): void {
    document.removeEventListener('sentinel-editor-online', null, false)
  }
}
