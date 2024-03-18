import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserType } from '../enums/user-types.enum';

@Injectable({
  providedIn: 'root',
})
export class ValidUserTypeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userType = route.paramMap.get('userType');

    if (Object.values(UserType).includes(userType as UserType)) {
      return true;
    }

    return this.router.createUrlTree(['/registration/general']);
  }
}
