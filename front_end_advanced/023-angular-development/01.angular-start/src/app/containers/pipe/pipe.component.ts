import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  date: Date = new Date();
  money: number = 100000000;
  text: string = 'Hello Angular!'
  customPipe: string = 'This is Custom pipe!'

  constructor() {}

  ngOnInit(): void {}
}
