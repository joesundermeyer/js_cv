import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <div class="center">
        <header class="w3-header w3-grey ">
            <h1>Experience</h1>
        </header>
        <h2 class="h2-exp">Web Accessibility Coordinator</h2>
        <h2>JOHNSON COUNTY, KS / COUNTY MANAGER’S OFFICE <br>[2019 - present]</h2>
        <ul>
        <li>Responsible for ensuring accessibility (WCAG 2.1 and SECTION 508) of all county government
        digital properties and services.</li>
        <li>Working with technical leads to improve accessibility and responsiveness of all properties
        and services via Drupal upgrade and site redesign.</li>
        <li>Remediation of all PDF documents created by 30 departments/agencies.</li>
        </ul>

        <h2 class="h2-exp">Writer/Designer/Front End Developer/CMO</h2>
        <h2>INRETURN STRATEGIES/APTLY.ORG <br>[2017 - 2019]</h2>
        <ul>
        <li>Created accessible web presence and all marketing material -- content and design, online and
        offline -- for a pair of SaaS startups devoted to employment for people with disabilities.</li>
        <li>Worked with technical lead to develop the accessible front end for two Angular/Bootstrap
        websites in less than 6 months including adhering to Google’s Material Design standards and
        integration with Atlassian suite.</li>
        <li>Drove lead generation including everything from email campaigns to industry presentations.</li>
        </ul>
    
        <h2 class="h2-exp">Director of Outreach/Web Strategy Coordinator</h2>
        <h2>UNBOUND.ORG <br>[2013 - 2017]</h2>
        <ul>
        <li>Managed a small in-house team in concepting, shooting, editing and placing award-winning
        TV commercials featuring a sponsored family in Guatemala.</li>
        <li>Directed and wrote all copy for an integrated advertising campaign that generated over 100
        million impressions, doubled the number of web sponsorships and helped the organization
        reach a new high in total sponsorships.</li>
        <li>Increased web traffic in the first year by 140%.</li>
        </ul>
    
        <h2 class="h2-exp">Manager/Content & Design</h2>
        <h2>SPRINT.COM <br>[2008 - 2013]</h2>
        <ul>
        <li>Wrote and edited results-driven sales and support content for retail, B2B and other audiences.</li>
        <li>Managed team responsible for quick-turn backlog of over 90 projects per month.</li>
        <li>Assigned creative resources to projects, coordinated Legal and Brand reviews and drove
        on-time delivery of work.</li>
        </ul>
    
        <h2 class="h2-exp">Managing Editor/Creative Development</h2>
        <h2>AMERICANCENTURY.COM <br>[1998 - 2008]</h2>
        <ul>
        <li>Writing, editing and management of resources and deliverables for integrated graphics,
        content and video team.</li>
        <li>Assured compliance of all generated content.</li>
        <li>Redesigned and launched 3 major financial websites in less than a year.</li>
        <li>NASD Series 6 and 26 Certification.</li>
        </ul>
    
        <h2 class="h2-exp">Marketing Consultant</h2>
        <h2>SDC, a sole proprietorship <br>[1992 - 1998]</h2>
        <ul>
        <li>Writer/Graphic Designer of all communications for a $1 billion financial client.</li>
        <li>Designed and built client’s first website in 1996.</li>
        </ul>
    </div>
  `,
  styles: []
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
