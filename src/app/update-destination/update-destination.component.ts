import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../model/Destination';
import { DestinationService } from '../shared/destination.service';
import { InformationService } from '../shared/information.service';

@Component({
  selector: 'app-update-destination',
  templateUrl: './update-destination.component.html',
  styleUrls: ['./update-destination.component.css'],
})
export class UpdateDestinationComponent implements OnInit {
  destination: Destination = new Destination();

  id: string;
  destinationForm: FormGroup;

  show: boolean = false;

  update() {
    this.is.getWeather(this.destination.location).subscribe((res) => {
      this.destination.lon = res['location'].lon;
      this.destination.lat = res['location'].lat;
      this.destination.temperature = res['current'].temperature;
      this.destination.weatherUrl = res['current'].weather_icons[0];
      this.destination.weather = res['current'].weather_descriptions[0];
      this.destination.mapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${this.destination.lon},${this.destination.lat},9,0/300x200?access_token=pk.eyJ1Ijoia2hhbGlsbCIsImEiOiJja2lodXVwNHcxN281MnFxdTVzY2EydHMyIn0.1lOFJAVZVirlcsFEZFeMlQ`;
      this.ds
        .updateDestination(this.id, this.destination)
        .subscribe((res) => console.log(res));
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    });
    
  }

  constructor(
    private ds: DestinationService,
    private is: InformationService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.destinationForm = new FormGroup({
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });

    this.ar.paramMap.subscribe((res) => {
      this.id = res.get('id');
      this.ds.getLocation(this.id).subscribe((res) => (this.destination = res));
    });
  }
}
