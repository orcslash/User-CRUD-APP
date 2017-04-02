import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorials.components';
import {UsersCRUD} from './users.component';

@Component({
  selector: 'my-app',
  template: `<h1>User Management Application</h1>
  <user-contoler></user-contoler>
  `,
  directives: [UsersCRUD]
})
export class AppComponent { }
