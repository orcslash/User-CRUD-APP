import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2>My first component from tuts.</h2>
    <h4>Tutorials goes on...</h4>
    {{title}}
    `,
    styles: [`h4 {
        color: red
    }`]
})
export class TutorialsComponent {
    public title = "Some tutorials from something";
}