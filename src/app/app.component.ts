import { Component } from '@angular/core';
import { GuestBookEntry } from 'src/models/GuestBookEntry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'cs5220-guestbook-client-angular';

  entries = [
    new GuestBookEntry('John', 'Hi'),
    new GuestBookEntry('Jane', 'Hello')
  ];

  onEntryAdded(entry: GuestBookEntry) {
    this.entries.push(entry);
  }
}
