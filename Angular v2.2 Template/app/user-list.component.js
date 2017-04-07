"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user-service");
var UserListComponent = (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
        this.userList = [{ id: 1, name: "Nick Wright", username: "Night" }];
        this.users = [];
    }
    UserListComponent.prototype.removeUser = function (id) {
        // this.users = this.users.filter(function (user) {
        //     return user.id !== id;
        // });
    };
    UserListComponent.prototype.addUser = function () {
        this._userService.createUser({ id: 666, name: 'Shit Stain', username: 'ttatata' });
    };
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (resUserData) { return _this.users = resUserData; });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'user-list',
        template: "<h2>User List</h2>\n            <table class=\"dataTable\">\n            <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>User Name</th>\n            <th>Actions</th>\n            </tr>\n            <tr *ngFor=\"let user of users\">\n            <td>{{user.id}}</td>\n            <td>{{user.name}}</td>\n            <td>{{user.username}}</td>\n            <td><button (click)=\"removeUser(user.id)\">Delete</button> | Update | Review</td>\n            </tr>\n            </table> \n            \n            <button (click)=\"addUser()\">adddummyuser</button>",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map