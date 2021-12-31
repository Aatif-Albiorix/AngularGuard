import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { UserComponent } from 'app/user/user.component';


export interface CanComponentLeave {
  canLeave: () => boolean;
}
@Injectable()
export class ChangeGuard implements CanDeactivate<CanComponentLeave>{
  canDeactivate(component: CanComponentLeave) {
   if(component.canLeave){
    return  component.canLeave();
  }
   return true;
  }
}

// export class ChangeGuard implements CanDeactivate<UserComponent>{
//   canDeactivate(component: UserComponent): boolean {
//    if(component.userName.dirty){
//     return window.confirm('You have some unsaved changes. Are you Sure you want to navigate ??')
//    }
//    return true;
//   }
// }
