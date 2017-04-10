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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
/**
 * {UserService} class manages user information.
 */
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        //private _url: string = "https://jsonplaceholder.typicode.com/users/";
        this._url = "apidata/users.json";
        this.users = [];
    }
    /**
     * Fetches user information from remote server or file.
     */
    UserService.prototype.getUsers = function () {
        return this._http.get(this._url).map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
    };
    UserService.prototype.createUser = function (_a) {
        var userInfo = JSON.stringify({});
        var params = 'json=' + userInfo;
        var header = new Headers().append('Content-Type', 'application/json');
        //return this._http.post(this._url, params, {headers: header}).map(res => res.json());
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map