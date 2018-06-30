import { ItemService } from './../../services/item.service';
import { Item } from './../../Modules/item';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  item: Item = {
    Title: '',
    Description: ''
  };

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('from onSumit');
    // tslint:disable-next-line:no-debugger
    debugger;
    // tslint:disable-next-line:triple-equals
    if (this.item.Title != '' && this.item.Description != '') {
      console.log(this.item);
      this.itemService.addItem(this.item);
      this.item.Title = '';
      this.item.Description = '';
     }
  }

}
