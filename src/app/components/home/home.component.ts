import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Joe Sundermeyer</h1>
      <h2 class="right"><a class="home_navlink" routerLink="skils">Skills</a></h2><br>
      <h2 class="right"><a class="home_navlink" routerLink="experience">Experience</a></h2><br>
      <h2 class="right"><a class="home_navlink" routerLink="about">About</a></h2><br>
      
    </div>
    </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/windows.jpg') !important;
      background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
