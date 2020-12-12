import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private client: HttpClient) { }

  getWeather(city:string){
    return this.client.get("http://api.weatherstack.com/current?access_key=aa4fdb3bf2b8f2434a6a856e58bab081&query=" + city);
  }
}
