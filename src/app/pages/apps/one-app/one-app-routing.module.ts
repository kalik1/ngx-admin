import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppShowComponent} from './app-show/app-show.component';
import {AppSettingsComponent} from './app-settings/app-settings.component';
import {OneAppComponent} from './one-app.component';

const OneAppRoutes: Routes = [
  {
    path: '',
    component: OneAppComponent,
    children: [
      {
        path: '',
        redirectTo: 'show',
      },
      {
        path: 'show',
        component: AppShowComponent,
      },
      {
        path: 'settings',
        component: AppSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(OneAppRoutes)],
  exports: [RouterModule],
})
export class OneAppRoutingModule { }
