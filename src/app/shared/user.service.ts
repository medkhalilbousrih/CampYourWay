import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = "http://localhost:3000/users";

  constructor(private client: HttpClient) { }

  addUser(user: User):Observable<User>{
    return this.client.post<User>(this.baseURL,user);
  }

  getUsers():Observable<User[]>{
    return this.client.get<User[]>(this.baseURL);
  }
}
