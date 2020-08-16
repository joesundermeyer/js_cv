import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
    
    <!-- header -->
    <app-header></app-header>

    <!-- footer -->
    <app-footer></app-footer>

  `,
  styles: []
})

export class AppComponent {
  title = 'joe-sundermeyer';
}
