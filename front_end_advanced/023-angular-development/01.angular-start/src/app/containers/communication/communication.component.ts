import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  isFavorite: boolean = true

  constructor() { }

  handleChange(value: {name: string}) {
    console.log(value);
  }

  ngOnInit(): void {
  }

}
