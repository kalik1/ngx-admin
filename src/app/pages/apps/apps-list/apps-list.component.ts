import { Component, OnInit, Input, Output } from '@angular/core';

import { ViewRenderComponent } from './app-list-click.component';

import { LocalDataSource } from 'ng2-smart-table';

import { AppService } from '../../../services/app.service';

@Component({
  selector: 'ngx-apps-list',
  templateUrl: './apps-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AppsListComponent  implements OnInit {
  @Output() source: LocalDataSource;
  @Output() settings: any;


  constructor(private service: AppService) {
     this.source = new LocalDataSource();

    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
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

    const data = this.service.getApps();
    this.source.load(data);

  }

  ngOnInit() {

  }

  @Input() onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
