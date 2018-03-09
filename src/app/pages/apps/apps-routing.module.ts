import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsComponent } from './apps.component';
import { AppsListComponent } from './apps-list/apps-list.component';

const routes: Routes = [{
  path: '',
  component: AppsComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
    },
    {
      path: 'list',
      component: AppsListComponent,
    },
    {
      path: ':id',
      loadChildren: './one-app/one-app.module#OneAppModule',
      /*data: { preload: true },*/
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule { }

export const routedComponents = [
  AppsComponent,
  AppsListComponent,
];
