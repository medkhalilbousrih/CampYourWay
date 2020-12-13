import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users: User[];
  show: boolean = false;
  em: string;
  pwd: string;

  login = localStorage.getItem('login');

  loginfun() {
    for (let u of this.users) {
      if (u.password === this.pwd && u.email === this.em) {
        this.login = "true";
        localStorage.setItem('login', 'true');
        return;
      }
    }
    this.show = true;
    setTimeout(()=>{
      this.show = false;
    },1000)
  }
  logoutfun() {
    this.login = "false";
    localStorage.setItem('login', 'false');
  }

  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.getUsers().subscribe((res) => (this.users = res));
  }
}
