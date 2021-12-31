import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any[];
  display: boolean = false;

  constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  goToChild() {
    this.router.navigate(['child'], {relativeTo: this.route});
  }
}
