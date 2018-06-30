import { Item } from './../../Modules/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  // tslint:disable-next-line:no-inferrable-types
  editState: boolean = false;
  itemToEdit: Item;
  constructor(private itemService: ItemService) { }
  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item) {
    this.itemService.deleteItem(item);
    this.clearState();
  }

  editItem(event, item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

}
