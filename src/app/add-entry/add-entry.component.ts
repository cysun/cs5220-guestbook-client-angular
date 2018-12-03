import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GuestBookEntry } from 'src/models/GuestBookEntry';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styles: []
})
export class AddEntryComponent implements OnInit {
  @Output() entryAdded: EventEmitter<GuestBookEntry> = new EventEmitter<
    GuestBookEntry
  >();

  constructor() {}

  ngOnInit() {}

  addEntry(name: HTMLInputElement, message: HTMLInputElement) {
    return this.entryAdded.emit(new GuestBookEntry(name.value, message.value));
  }
}
