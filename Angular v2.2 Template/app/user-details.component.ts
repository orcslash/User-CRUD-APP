import { Component, OnInit } from '@angular/core';
import { UserService } from "./user-service";

@Component({
  selector: 'user-detail',
  template: `<h2>Hello {{name}}</h2>
             <ul *ngFor="let user of users">
               <li>{{user.id}}. {{user.name}} - {{user.username}}</li>
             </ul>`,
})
export class UserDetailComponent implements OnInit {
  users = [];

  constructor(private _userService: UserService) { }

  removeUser(id) {
    this.users = this.users.filter(function (user) {
      return user.id !== id;
    });
  }

  ngOnInit() {
    this._userService.getUsers().subscribe(resUserData => this.users = resUserData)
  }
}
