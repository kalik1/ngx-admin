import { NgModule } from '@angular/core';
import {ThemeModule} from '../../../@theme/theme.module';
import { CommonModule } from '@angular/common';

import { OneAppRoutingModule } from './one-app-routing.module';

import { AppShowComponent } from './app-show/app-show.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import {AppService} from '../../../services/app.service';
import {OneAppComponent} from './one-app.component';


@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    OneAppRoutingModule,
  ],
  declarations: [
    AppShowComponent,
    AppSettingsComponent,
    OneAppComponent,
  ],
  providers: [
    AppService,
  ],
})
export class OneAppModule { }
