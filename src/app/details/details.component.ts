import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../model/Destination';
import { DestinationService } from '../shared/destination.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:string;
  destination: Destination = new Destination();

  login = localStorage.getItem("login");

  constructor(private ds: DestinationService, private ar: ActivatedRoute) { }

  del():void{
    if(window.confirm("Are you sure you want to delete this destination?")){
      this.ds.delLocation(this.id).subscribe(res => console.log(res));
    }
  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(res => this.id = res.get('id'));
    this.ds.getLocation(this.id).subscribe(res => this.destination = res);
    console.log(this.destination)
  }

}
