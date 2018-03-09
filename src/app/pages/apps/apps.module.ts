import {NgModule} from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AppsRoutingModule, routedComponents } from './apps-routing.module';
import { AppService } from '../../services/app.service';
import { ViewRenderComponent } from './apps-list/app-list-click.component';

@NgModule({
  imports: [
    ThemeModule,
    AppsRoutingModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [ViewRenderComponent],
  declarations: [
    ...routedComponents,
    ViewRenderComponent,
  ],
  providers: [
    AppService,
  ],
})
export class AppsModule { }
