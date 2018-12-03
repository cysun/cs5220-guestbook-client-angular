import { Component, OnInit, Input } from '@angular/core';
import { GuestBookEntry } from 'src/models/GuestBookEntry';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styles: []
})
export class GuestBookComponent implements OnInit {
  @Input() entries: GuestBookEntry[];

  constructor() {}

  ngOnInit() {}
}
