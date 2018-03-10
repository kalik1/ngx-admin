import { Injectable } from '@angular/core';

import { App } from '../models/app'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {
  appsCollection: AngularFirestoreCollection<App>;
  appDoc: AngularFirestoreDocument<App>;
  apps: Observable<App[]>;
  app: Observable<App>;

  constructor(private afs: AngularFirestore ) {
    this.appsCollection = this.afs.collection('myapps'/*, ref => ref.orderBy('id', 'asc')*/);
  }
  getApps(): Observable<App[]> {
    this.apps = this.appsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as App;
        const id = action.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.apps;
  }

  newApp(app: App) {
    if (app.id) delete app.id;
    console.log (app);
    this.appsCollection.add({name: app.name});
  }

  deleteApp(app: App) {
    this.appDoc = this.afs.doc(`myapps/${app.id}`);
    this.appDoc.delete();
  }
}
