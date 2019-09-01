import { Component } from '@angular/core';
import {StateService} from '../services/state.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = '';
  constructor(
    private stateService: StateService
  ) {
    this.setTitle();
  }

  updateTitle(e) {
    this.stateService.title = e;
    this.setTitle()
  }

  setTitle() {
    this.title = this.stateService.title
  }
}