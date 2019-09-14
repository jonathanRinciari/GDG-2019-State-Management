import { Component, OnInit } from '@angular/core';
import {StateService} from '../services/state.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements onInit {
  appTitle: sting;
  constructor(
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.setTitle();
  }

  updateTitle(e) {
    this.stateService.title = e;
    
    this.setTitle()
  }

  private setTitle() {
    this.appTitle = this.stateService.title
  }
}