import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  template: `
     <div class="center">
        <header class="w3-header w3-grey ">
            <h1>Experience</h1>
        </header> 
            <p>Digital Accessibility/Equity</p>
            <div class="container-3">
              <div class="skills dae">90%</div>
            </div>
            <h2 class="h2-exp">Advanced</h2>
            <p class="p-spaced">I have been working on accessibility for the past 8 years or so, most notably in the past 3, during my time at a startup focused employment for people with disabilities and, during the past year, as a digital accessibility expert for government of Johnson County, Kansas.</p>

            <p>CSS</p>
            <div class="container-3">
              <div class="skills css">80%</div>
            </div>

            <p>JavaScript</p>
            <div class="container-3">
              <div class="skills js">65%</div>
            </div>

            <p>PHP</p>
            <div class="container-3">
              <div class="skills php">60%</div>
            </div>
  `,
  styles: [
  ]
})
export class SkilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
