import { Component, OnInit } from '@angular/core';
import { Parent1ComponentComponent } from '../parent1-component.component';

@Component({
  selector: 'app-child1-component',
  templateUrl: './child1-component.component.html',
  styleUrls: ['./child1-component.component.css']
})
export class Child1ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
