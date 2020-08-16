import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-info is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Contact</h1>
      
        <section class="section">
            <!-- form goes here -->
            <form>

              <!-- name -->
              <div class="field">
                <input type="text" name="name" class="input" placeholder="Your Name" [(ngModel)]="name">
              </div>

              <!-- email -->
              <div class="field">
                <input type="email" name="email" class="input" placeholder="Your Email" [(ngModel)]="email">
              </div>

              <!-- message -->
              <div class="field">
                <textarea class="textarea" name="message" placeholder="What's on your mind?" [(ngModel)]="message"></textarea>
              </div>

              <button type="submit" class="button is-orange is-large">Submit</button>

            </form>
        </section>
        
    </div>
  </div>
 </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}
  
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }
}