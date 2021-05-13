import {animate, style, transition, trigger} from '@angular/animations';

export const derAIzAnimation = trigger('derAIzAnimation', [
  transition(':enter', [
    style({transform: 'translateX(40%)', opacity: 0}),
    animate(
      '0.2s ease-out',
      style({opacity: 0})
    ),
    animate(
      '0.8s ease-out',
      style({transform: 'translateX(0%)', opacity: 1})
    )
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)', opacity: 1}),
    animate(
      '0.2s ease-out',
      style({opacity: 1})
    ),
    animate(
      '0.8s ease-out',
      style({transform: 'translateX(40%)', opacity: 0})
    )
  ])
]);
