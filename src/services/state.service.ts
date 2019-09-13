import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({providedIn: 'root'})
export class StateService {
  private $datasource = new BehaviorSubject('Hello GDG 2019!');
  public $data = this.$datasource.asObservable();
  constructor() { 

  }

  updateTitle(title: string) {
    this.$datasource.next(title);
  }
}