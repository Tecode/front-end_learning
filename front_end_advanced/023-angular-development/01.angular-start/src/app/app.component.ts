import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition('one => two, one => three, two => three', [
        query(':enter', style({ /*transform: 'translateX(100%)',*/ opacity: 0 })),
        group([
          query(
            ':enter',
            animate(
              '0.4s ease-in',
              style({ /*transform: 'translateX(0)',*/ opacity: 1 })
            )
          ),
          query(
            ':leave',
            animate(
              '0.4s ease-out',
              style({
                /*transform: 'translateX(-100%)',*/
                opacity: 0,
              })
            )
          ),
        ]),
      ]),
      transition('three => two, three => one, two => one', [
        query(':enter', style({ transform: 'translateX(-100%)', opacity: 0 })),
        group([
          query(
            ':enter',
            animate(
              '0.4s ease-in',
              style({ transform: 'translateX(0)', opacity: 1 })
            )
          ),
          query(
            ':leave',
            animate(
              '0.4s ease-out',
              style({
                transform: 'translateX(100%)',
                opacity: 0,
              })
            )
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Angular';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }
}
