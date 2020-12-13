import { Component, OnInit } from '@angular/core';
import { Destination } from '../model/Destination';
import { DestinationService } from '../shared/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private ds: DestinationService ) {}

  destinations:Destination[];

  countryFilter:string = "";
  locationFilter:string;
  
  ngOnInit(): void {
    this.ds.getDestinations().subscribe(res => this.destinations = res);
  }

}
