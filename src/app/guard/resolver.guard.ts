import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()

export class ResolverGuard implements Resolve<any> {
  
  userObj = {
    userId: 10,
    userName: 'Raj'
  };
  
  resolve(){
    return this.userObj;
  }
}
