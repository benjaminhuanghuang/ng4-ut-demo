import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Guess The Word</h1>
    `
})
export class AppComponent {
    solution = "Angular2";
    selection = '';
    display = "*******";
}
