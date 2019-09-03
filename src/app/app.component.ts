import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './state/reducers/';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  $title: Observable<string>;
  constructor(
    private store:Store<State>
  ) {
    store.subscribe((a) => console.log(a))
  }

  updateTitle(e) {

  }
}