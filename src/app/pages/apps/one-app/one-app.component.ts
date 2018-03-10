import { Component, OnInit /*Input, Output*/ } from '@angular/core';
// import {AppService} from '../../../services/app.service';


@Component({
  selector: 'ngx-one-app',
  template: `
    <nb-card>
      <nb-card-header>
        APP
      </nb-card-header>

      <nb-card-body>
        <router-outlet></router-outlet>
      </nb-card-body>
    </nb-card>

  `,
})
export class OneAppComponent implements OnInit {

  constructor(/*private appService: AppService*/ ) {

  }

  ngOnInit() {
   /* this.appService.getApps().subscribe(
      apps => {
        this.source = apps;
      },
    );*/
  }
}
