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
var UserDetailComponent = (function () {
    function UserDetailComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UserDetailComponent.prototype.removeUser = function (id) {
        this.users = this.users.filter(function (user) {
            return user.id !== id;
        });
    };
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (resUserData) { return _this.users = resUserData; });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        selector: 'user-detail',
        template: "<h2>Hello {{name}}</h2>\n             <ul *ngFor=\"let user of users\">\n               <li>{{user.id}}. {{user.name}} - {{user.username}}</li>\n             </ul>",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-details.component.js.map