import { Component, OnInit } from '@angular/core';
import { Parent1ComponentComponent } from '../parent1-component.component';

@Component({
  selector: 'app-child2-component',
  templateUrl: './child2-component.component.html',
  styleUrls: ['./child2-component.component.css']
})
export class Child2ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
