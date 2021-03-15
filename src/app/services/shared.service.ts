import {Injectable} from '@angular/core';
import { Item } from '../item';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private loggingService: LoggingService) {
  }

  getItems() {
    let itemList: Item[];
    itemList = [
      new Item(1, 'First Item', 25),
      new Item(2, 'Second Item', 50),
      new Item(3, 'Third Item', 40)
    ];

    this.loggingService.log('List of users: ' + itemList);

    return itemList;
  }

}
