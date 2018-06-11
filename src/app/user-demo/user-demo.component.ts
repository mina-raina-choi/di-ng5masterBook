import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent {
  userName: string;
  // removed `userService` because of constructor shorthand below

  // Angular will inject the singleton instance of `UserService` here.
  // We set it as a property with `private`.
  constructor(private userService: UserService) { }
  
  signIn(): void {
    this.userService.setUser({
      name: 'Mina Choi'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is : ', this.userName)
  }


}
