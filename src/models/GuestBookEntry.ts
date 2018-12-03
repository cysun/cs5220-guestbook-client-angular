export class GuestBookEntry {
  date = new Date();
  constructor(public name: string, public message: string) {}
}
