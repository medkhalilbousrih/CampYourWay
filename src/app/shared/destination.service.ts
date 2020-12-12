import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from '../model/Destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  baseURL = "http://localhost:3000/destinations";

  constructor(private client: HttpClient) { }

  getLocations():Observable<Destination[]>{
    return this.client.get<Destination[]>(this.baseURL);
  }

  getLocation(id:string):Observable<Destination>{
    return this.client.get<Destination>(this.baseURL + "/" + id);
  }

  addLocation(dest: Destination):Observable<Destination>{
    return this.client.post<Destination>(this.baseURL,dest);
  }

  delLocation(id: string):Observable<Destination>{
    return this.client.delete<Destination>(this.baseURL + "/" + id);
  }

  updateLocation(id: string,dest: Destination):Observable<Destination>{
    return this.client.put<Destination>(this.baseURL + "/" + id,dest);
  }
  
}
