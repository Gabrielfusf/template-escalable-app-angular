import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface OnComponentDeactivate {
  canDeactivate: () =>
    | Observable<boolean>
    | Promise<boolean>
    | boolean
    | UrlTree;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<OnComponentDeactivate>
{
  canDeactivate(
    component: OnComponentDeactivate
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canDeactivate();
  }
}
