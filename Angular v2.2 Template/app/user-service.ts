import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";

/**
 * {UserService} class manages user information.
 */
@Injectable()
export class UserService {
    constructor(private _http: Http) { }
    //private _url: string = "https://jsonplaceholder.typicode.com/users/";
    private _url: string = "apidata/users.json";
    users = [];

    /**
     * Fetches user information from remote server or file.
     */
    getUsers() {
        return this._http.get(this._url).map((response: Response) => response.json());
    }

    deleteUser(id) {

    }

    createUser({}) {
        var userInfo = JSON.stringify({});
        var params = 'json=' + userInfo;
        var header = new Headers().append('Content-Type', 'application/json');

        //return this._http.post(this._url, params, {headers: header}).map(res => res.json());
    }
}