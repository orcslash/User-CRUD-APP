import { Component } from '@angular/core';
import { UserService } from "./user-service";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <user-list></user-list>`,
  providers: [UserService]
})
export class AppComponent {
  name = 'Angular';
}