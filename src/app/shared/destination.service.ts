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

  getDestinations():Observable<Destination[]>{
    return this.client.get<Destination[]>(this.baseURL);
  }

  getDestination(id:string):Observable<Destination>{
    return this.client.get<Destination>(this.baseURL + "/" + id);
  }

  addDestination(dest: Destination):Observable<Destination>{
    return this.client.post<Destination>(this.baseURL,dest);
  }

  delDestination(id: string):Observable<Destination>{
    return this.client.delete<Destination>(this.baseURL + "/" + id);
  }

  updateDestination(id: string,dest: Destination):Observable<Destination>{
    return this.client.put<Destination>(this.baseURL + "/" + id,dest);
  }
  
}
