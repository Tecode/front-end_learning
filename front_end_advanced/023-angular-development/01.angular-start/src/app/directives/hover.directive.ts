import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  HostListener,
} from '@angular/core';

type HoverOptions = { backgroundColor?: string };
@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements AfterViewInit {
  @Input('appHover') appHover: HoverOptions = {};

  element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    console.log(this.element, 'element');
    this.element.style.backgroundColor = this.appHover.backgroundColor || '';
  }

  @HostListener('mouseenter') enter() {
    this.element.style.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') leave() {
    this.element.style.backgroundColor = this.appHover.backgroundColor || '';
  }

}
