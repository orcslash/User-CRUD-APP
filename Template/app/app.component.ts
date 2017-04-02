import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorials.components';

@Component({
  selector: 'my-app',
  template: `<h1>TEST</h1>
            <my-tutorials>DDD</my-tutorials>`,
  directives: [TutorialsComponent]
})
export class AppComponent { }
