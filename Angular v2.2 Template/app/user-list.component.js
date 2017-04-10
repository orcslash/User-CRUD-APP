"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserListComponent = (function () {
    function UserListComponent() {
        this.userList = [
            { name: "King Hill" },
            { name: "Bruce Wayne" },
            { name: "Stan Smith" }
        ];
        this.selectedUser = { name: "" };
        // ngOnInit() {
        //     this._userService.getUsers().subscribe(resUserData => this.users = resUserData);
        // }
        // users = [];
        // constructor(private _userService: UserService) { }
    }
    UserListComponent.prototype.editUser = function (user) {
        this.selectedUser = user;
    };
    UserListComponent.prototype.addUser = function (user) {
        this.userList.push({ name: user.value });
    };
    UserListComponent.prototype.deleteUser = function () {
        this.userList.splice(this.userList.indexOf(this.selectedUser));
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'user-list',
        template: "\n            <h2>User List</h2>\n            <ul id=\"userList\">\n            <li *ngFor=\"let user of userList\" (click)=\"editUser(user)\">{{user.name}}</li>\n            </ul>\n            <table>\n            <tr>\n                <th>Edit/Delete</th>\n                <th>Add User</th>\n            </tr>\n            <tr>\n                <td>\n                <input type=\"text\" [(ngModel)]=\"selectedUser.name\">\n                <button (click)=\"deleteUser()\">Delete</button>\n                </td>\n                <td>\n                <input type=\"text\" #user>\n                <button (click)=\"addUser(user)\">Add User</button>\n                </td>\n            </tr>\n            </table>\n            ",
    })
    /**
     * {UserListComponent} class manages user information.
     * @author Mintautas Kiulkys
     */
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map