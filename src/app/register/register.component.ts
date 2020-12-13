import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  show:boolean = false;

  add():void{
    this.us.addUser(this.user).subscribe(res => console.log(res));
    this.show = true;
    setTimeout(()=>{ 
      this.show = false; 
    }, 2000);
  }
  
  constructor(private us: UserService) { }

  ngOnInit(): void {
    
  }

}
