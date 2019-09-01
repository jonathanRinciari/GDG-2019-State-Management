import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  onClicker() {
    this.onClick.emit(this.value);
    this.value = '';
  }

}