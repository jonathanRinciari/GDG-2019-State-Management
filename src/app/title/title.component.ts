import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Output() onClick = new EventEmitter();

  title = '';

  constructor() { }

  ngOnInit() {
  }

  onClickHandler() {
    this.onClick.emit(this.title);
    this.title = '';
  }

}