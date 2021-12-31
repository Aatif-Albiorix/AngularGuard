import { ResolverGuard } from './guard/resolver.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChildComponent } from './child/child.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { ChangeGuard } from './guard/change.guard';
import { CheckGuard } from './guard/check.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {  
      path: 'admin', 
      component: AdminComponent,
      canActivate: [AuthGuard],
      canActivateChild: [AdminGuard],
      children: [
        {
          path: 'child', // child route path
          component: ChildComponent, // child route component that the router renders
        }]
     },
    { path: 'login', component: LoginComponent},
    { path: 'user', component: UserComponent, canDeactivate: [ChangeGuard]},
    { path: 'no-access', component: NoAccessComponent},
    { 
      path: 'preferences', 
      component: PreferencesComponent,
      resolve: {
        data: ResolverGuard
      }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }