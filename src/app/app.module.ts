import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({reducer}) ],
  declarations: [ AppComponent, TitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
