import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

type Human = {
  information?: {
    name: string;
    id?: number;
  };
};

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss'],
})
export class LocalComponent implements OnInit, AfterViewInit {
  @ViewChild('nativeElement') nativeElement:
    | ElementRef<HTMLElement>
    | undefined;

  @ViewChildren('child') children: QueryList<HTMLElement> | undefined;

  name = 'localApplication';
  value = 'Data bidirectional';
  human: Human = { information: { name: 'haoxuan' } };
  listData: string[] = ['haoxuan', 'jie', 'child'];

  handleClick(event: Event) {
    console.log(this, event);
  }

  handleSetValue() {
    this.value = 'Value is changed';
  }

  handleGetValue() {
    console.log('handleGetValue', this.value);
  }

  handleKeyup(event: Event) {
    console.log(event.target);
  }

  handleClickGetElement(button: HTMLButtonElement) {
    console.log(button);
  }

  trackValue(index: number, value: string) {
    console.log(value, index, '---');
    return index;
  }

  ngAfterViewInit(): void {
    // Get Native Document Element
    console.log('nativeElement:', this.nativeElement?.nativeElement);
    // Get Native Document Element List
    console.log('nativeElement List:', this.children?.toArray());
  }

  constructor() {}

  ngOnInit(): void {}
}
