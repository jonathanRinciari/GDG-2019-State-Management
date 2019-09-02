import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Output() onClick = new EventEmitter();
  value = '';
  constructor() { }

  ngOnInit() {
  }

  onClickHandler() {
    this.onClick.emit(this.value);
    this.value = '';
  }

}