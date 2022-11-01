import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

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

  handleClick(event: Event) {
    console.log(this, event);
  }

  handleKeyup(event: Event) {
    console.log(event.target);
  }

  handleClickGetElement(button: HTMLButtonElement) {
    console.log(button);
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
