import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable()
export class CheckGuard implements CanLoad{
  canLoad() {
    return true;
  }
}
