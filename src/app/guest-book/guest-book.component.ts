import { Component, OnInit, Input } from '@angular/core';
import { GuestBookEntry } from 'src/models/GuestBookEntry';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styles: []
})
export class GuestBookComponent implements OnInit {
  entries: GuestBookEntry[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getEntries().subscribe(entries => {
      this.entries = entries;
    });
  }
}
