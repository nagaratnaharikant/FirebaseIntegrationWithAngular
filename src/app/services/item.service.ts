import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Item } from '../Modules/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public db: AngularFirestore) {
      // this.items = this.db.collection('items').valueChanges();
      this.itemCollection = this.db.collection('items', ref => ref.orderBy('Title', 'asc'));
      this.items = this.itemCollection.snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.db.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.db.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}


