import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from './state/reducers/';
import { selectTitle } from './state/selector/';
import { map } from 'rxjs/operators'
import { Reset, Update } from './state/actions'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  $title: Observable<any>;
  constructor(
    private store:Store<State>
  ) {
    this.$title = store.select('titleState').pipe(
      select(selectTitle)
    )
    /*
      {
        title: string
      }
    */
  }

  updateTitle(title: string) {
    this.store.dispatch(new Update({title}));
  }

  onResetHandler() {
    this.store.dispatch(new Reset());
  }
}