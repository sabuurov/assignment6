import { Component, OnInit } from '@angular/core';
import { Parent2ComponentComponent } from '../parent2-component.component';

@Component({
  selector: 'app-child3-component',
  templateUrl: './child3-component.component.html',
  styleUrls: ['./child3-component.component.css']
})
export class Child3ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
