import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.scss']
})
export class ChildContentComponent implements OnInit {
  @Input('isFavorite') isFavorite : boolean = false
  @Output() change = new EventEmitter()

  constructor() { }

  handleClick() {
    this.change.emit({name: 'haoxuan'})
  }

  ngOnInit(): void {
  }

}
