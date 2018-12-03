import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GuestBookEntry } from 'src/models/GuestBookEntry';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styles: []
})
export class AddEntryComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  addEntry(name: HTMLInputElement, message: HTMLInputElement) {
    this.dataService.addEntry(new GuestBookEntry(name.value, message.value));
  }
}
