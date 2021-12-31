import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  addUser() {
    this.router.navigate(['user'], {relativeTo: this.route});
  }
}
