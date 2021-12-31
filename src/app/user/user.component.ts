import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from 'app/guard/change.guard';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements CanComponentLeave {

  userName: FormControl = new FormControl();

  canLeave(): boolean{
    if(this.userName.dirty){
      return window.confirm('You have some unsaved changes. Are you Sure you want to exit ??');
    }
    return true;
  }

}
