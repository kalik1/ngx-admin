import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewRenderComponent } from './app-list-click.component';
import { AppService } from '../../../services/app.service';
import {App } from '../../../models/app'

@Component({
  selector: 'ngx-apps-list',
  templateUrl: './apps-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AppsListComponent implements OnInit {
  @Output() source: App[];
  @Output() settings: any;

  constructor(private appService: AppService) {

    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true,
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      pager: {
        display: true,
        perPage: 10,
      },
      columns: {
       /** id: {
          title: 'ID',
          type: 'number',
        },*/
        name: {
          title: 'Application Name',
          type: 'string',
        },
        applets: {
          title: 'Applets',
          type: 'number',
          editable: false,
        },
        id: {
          title: 'Show',
          type: 'custom',
          renderComponent: ViewRenderComponent,
          editable: false,
        },
      },
    };
  }

  ngOnInit() {
    this.appService.getApps().subscribe(
      apps => {
        this.source = apps;
      },
    );
  }

  @Input() onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.appService.deleteApp(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  @Input() onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create?')) {
      this.appService.newApp(event.newData);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
