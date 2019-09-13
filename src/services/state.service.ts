import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StateService {
  private _title = 'Hello GDG 2019!';
  constructor() { 

  }

  get title() {
    return this._title
  }

  set title(newTitle) {
    this._title = newTitle;
  }

}