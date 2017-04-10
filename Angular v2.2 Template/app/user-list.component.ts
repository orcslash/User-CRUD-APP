import { Component, OnInit } from '@angular/core';
import { UserService } from "./user-service";

@Component({
    selector: 'user-list',
    template: `
            <h2>User List</h2>
            <ul id="userList">
            <li *ngFor="let user of userList" (click)="editUser(user)">{{user.name}}</li>
            </ul>
            <table>
            <tr>
                <th>Edit/Delete</th>
                <th>Add User</th>
            </tr>
            <tr>
                <td>
                <input type="text" [(ngModel)]="selectedUser.name">
                <button (click)="deleteUser()">Delete</button>
                </td>
                <td>
                <input type="text" #user>
                <button (click)="addUser(user)">Add User</button>
                </td>
            </tr>
            </table>
            `,
})
/**
 * {UserListComponent} class manages user information.
 * @author Mintautas Kiulkys
 */
export class UserListComponent {
    public userList = [
        { name: "King Hill" }, 
        { name: "Bruce Wayne" }, 
        { name: "Stan Smith" }];

    public selectedUser = { name: "" };

    editUser(user) {
        this.selectedUser = user;
    }

    addUser(user) {
        this.userList.push(
            { name: user.value })
    }

    deleteUser() {
        this.userList.splice(this.userList.indexOf(this.selectedUser));
    }

    // ngOnInit() {
    //     this._userService.getUsers().subscribe(resUserData => this.users = resUserData);
    // }

    // users = [];
    // constructor(private _userService: UserService) { }
}