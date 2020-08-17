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
              <div class="skills dae skills-color">90%</div>
            </div>
            <h2 class="h2-exp">Advanced</h2>
            <p class="p-spaced">I have been working on accessibility for the past 8 years or so, most notably in the past 3, during my time at a startup focused employment for people with disabilities and, during the past year, as a digital accessibility expert for government of Johnson County, Kansas.</p>

            <p>Copywriting</p>
            <div class="container-3">
              <div class="skills copy skills-copy">95%</div>
            </div>
            <h2 class="h2-exp">Expert</h2>
            <p class="p-spaced">My first job after college was as a journalist. Writing and editing have been part of every job I've had since. I excel at Marketing and Advertising copywriting and writing for the web.</p>

            <p>Angular CLI, Node.js, GitHub</p>
            <div class="container-3">
              <div class="skills cli skills-cli">75%</div>
            </div>
            <h2 class="h2-exp">Capable</h2>
            <p class="p-spaced">My first job after college was as a journalist. Writing and editing have been part of every job I've had since. I excel at Marketing and Advertising copywriting and writing for the web.</p>

            <p>HTML/CSS</p>
            <div class="container-3">
            <div class="skills css skills-css">80%</div>
            </div>
            <h2 class="h2-exp">Advanced</h2>
            <p class="p-spaced">My first job after college was as a journalist. Writing and editing have been part of every job I've had since. I excel at Marketing and Advertising copywriting and writing for the web.</p>
  `,
  styles: [
  ]
})
export class SkilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
