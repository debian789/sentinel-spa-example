import {Component, OnDestroy, OnInit} from '@angular/core';
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
  singleSpaProps: SingleSpaProps = null;
  subscription: Subscription = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => this.singleSpaProps = props
    )

    const self = this;
    this.singleSpaProps['sendData'].subscribe((data) => {
      debugger
      if (data.idRegla) {
        self.idRegla = data.idRegla;
      }
    });
  }

  ngOnDestroy(): void {
  }
}
