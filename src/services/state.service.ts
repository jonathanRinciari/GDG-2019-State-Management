import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StateService {
  private _title = 'Initial';
  constructor() { 

  }

  get title() {
    return this._title
  }

  set title(newTitle) {
    this._title = newTitle;
  }

}