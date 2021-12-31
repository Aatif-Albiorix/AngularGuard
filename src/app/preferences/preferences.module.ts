import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PreferencesComponent } from './preferences.component';


const routes: Routes = [
  { path: '', component: PreferencesComponent}
  ]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PreferencesModule { }
