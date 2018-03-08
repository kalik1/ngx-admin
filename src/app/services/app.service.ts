import { Injectable } from '@angular/core';

import { App } from '../models/app'

@Injectable()
export class AppService {
  apps: App[];

  constructor() {
    this.apps = [
      {id: '1', name: 'Gennarino', applets: 1},
      {id: '2', name: 'Peppino', applets: 2},
      {id: '3', name: 'Ruggerino', applets: 8},
    ]
  }
  getApps() {
    return this.apps;
  }

}
