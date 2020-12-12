import { Component, Input, OnInit } from '@angular/core';
import { Destination } from '../model/Destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  @Input() destination:Destination;

  constructor() { }

  ngOnInit(): void {
  }

}
