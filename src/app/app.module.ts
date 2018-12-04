import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

const routes: Routes = [
  { path: '', component: GuestBookComponent },
  { path: 'AddEntry', component: AddEntryComponent }
];

@NgModule({
  declarations: [AppComponent, GuestBookComponent, AddEntryComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
