import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }

// This is the root component of the application.
// It uses the router-outlet directive to display the content of the current route.
