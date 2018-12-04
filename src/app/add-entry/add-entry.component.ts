import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GuestBookEntry } from 'src/models/GuestBookEntry';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styles: []
})
export class AddEntryComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  addEntry(name: HTMLInputElement, message: HTMLInputElement) {
    this.dataService.addEntry(new GuestBookEntry(name.value, message.value));
    this.router.navigate(['']);
  }
}
