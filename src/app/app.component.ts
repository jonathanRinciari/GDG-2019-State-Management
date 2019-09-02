import { Component } from '@angular/core';
import {StateService} from '../services/state.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  $title: Observable<string>;
  constructor(
    private stateService: StateService
  ) {
    this.$title = stateService.$data;
  }

  updateTitle(e) {
    this.stateService.updateTitle(e);
  }
}