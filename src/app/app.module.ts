import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

@NgModule({
  declarations: [AppComponent, GuestBookComponent, AddEntryComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
