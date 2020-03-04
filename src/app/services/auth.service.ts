import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _bidderName;

  get bidderName(): string {
    return this._bidderName;
  }

  set bidderName(name: string) {
    this._bidderName = name;
  }

  constructor() { }
}
