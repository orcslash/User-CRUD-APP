import { Component, OnInit } from '@angular/core';
import { UserService } from "./user-service";

@Component({
    selector: 'user-list',
    template: `<h2>User List</h2>
            <table class="dataTable">
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Actions</th>
            </tr>
            <tr *ngFor="let user of users">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.username}}</td>
            <td><button (click)="removeUser(user.id)">Delete</button> | Update | Review</td>
            </tr>
            </table> 
            
            <button (click)="addUser()">adddummyuser</button>`,
})
export class UserListComponent implements OnInit {
    public userList = [{id: 1, name: "Nick Wright", username: "Night"}];
    users = [];
    constructor(private _userService: UserService) { }

        removeUser(id) {
        // this.users = this.users.filter(function (user) {
        //     return user.id !== id;
        // });
    }

    addUser() {
        this._userService.createUser({id: 666, name: 'Shit Stain', username: 'ttatata'});
    }

    ngOnInit() {
        this._userService.getUsers().subscribe(resUserData => this.users = resUserData);
    }
}