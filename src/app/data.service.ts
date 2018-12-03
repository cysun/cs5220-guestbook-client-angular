import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { GuestBookEntry } from 'src/models/GuestBookEntry';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _entries: GuestBookEntry[] = [];
  private _entriesSubject = new BehaviorSubject<GuestBookEntry[]>(
    this._entries
  );

  constructor(private http: HttpClient) {
    this.http.get<GuestBookEntry[]>('/api/guestbook').subscribe(entries => {
      this._entries = entries;
      this._entriesSubject.next(this._entries);
    });
  }

  getEntries(): Observable<GuestBookEntry[]> {
    return this._entriesSubject;
  }

  addEntry(entry: GuestBookEntry) {
    this.http
      .post<GuestBookEntry>('/api/guestbook', entry)
      .subscribe(newEntry => {
        this._entries.push(newEntry);
        this._entriesSubject.next(this._entries);
      });
  }
}
