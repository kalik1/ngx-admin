import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <a routerLink="../{{value}}"> {{renderValue}} </a>
  `,
})
export class ViewRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = 'View'// this.value.toString().toUpperCase();
  }

}
