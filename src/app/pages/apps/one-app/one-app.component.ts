import { Component } from '@angular/core';

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
export class OneAppComponent {

}
