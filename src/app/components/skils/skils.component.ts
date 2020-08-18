import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  template: `
     <div class="center">
        <header class="w3-header w3-grey ">
            <h1>Skills</h1>
        </header>
            <div class="container-3">
              <div class="skills dae">Digital Acessibility/Equity: 90%</div>
            </div>
            <h2 class="h2-exp">Advanced</h2>
            <p class="p-spaced">I have been working on accessibility for the past 8 years or so, most notably in the past 3, during my time at a startup focused employment for people with disabilities and, during the past year, as a digital accessibility expert for government of Johnson County, Kansas.</p>

            <div class="container-3">
              <div class="skills copy">Copywriting: 95%</div>
            </div>
            <h2 class="h2-exp">Expert</h2>
            <p class="p-spaced">My first job after college was as a journalist. Writing and editing have been part of every job I've had since. I excel at Marketing and Advertising copywriting and writing for the web.</p>

            <div class="container-3">
              <div class="skills cli">Angular CLI, Node.js, GitHub: 75%</div>
            </div>
            <h2 class="h2-exp">Capable</h2>
            <p class="p-spaced">Over the past 3 years, my web work has been almost exclusively devoted to front end content and design development using Angular, Material Design, and the Atlassian suite, primarily Jira, Bitbucket and Confluence. I am comfortable using using the CLI for Linux, Mac and Windows.</p>

            <div class="container-3">
            <div class="skills css">HTML/CSS: 80%</div>
            </div>
            <h2 class="h2-exp">Advanced</h2>
            <p class="p-spaced">I built my first website in 1996 using html and Java. After that, I worked on sites in various environments and various content management systems. I'm currently working in a Drupal/Sharepoint environment. I'm comfortable developing HTML and CSS from scratch whether as flat pages, via a CMS like Wordpress or on a component-ized platform like Angular.</p>
  `,
  styles: [
  ]
})
export class SkilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
