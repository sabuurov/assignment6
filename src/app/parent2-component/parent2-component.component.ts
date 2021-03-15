import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Item } from '../item';
@Component({
  selector: 'app-parent2-component',
  templateUrl: './parent2-component.component.html',
  styleUrls: ['./parent2-component.component.css']
})
export class Parent2ComponentComponent implements OnInit {
  // sharedService: SharedService;
  itemList: Item[] | undefined;

  constructor(private sharedService: SharedService) {
    // this.sharedService = new SharedService();
  }

  getItems() {
    this.itemList = this.sharedService.getItems();
  }

  ngOnInit(): void {
    this.getItems();
  }

}
