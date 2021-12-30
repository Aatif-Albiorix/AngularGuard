import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivateChild {
  canActivateChild(): boolean{
    return false;
  }
}
