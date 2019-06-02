import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.page.html',
  styleUrls: ['./select-item.page.scss'],
})
export class SelectItemPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToPaymentDetailPage() {
    this.router.navigate(['payment'])
  }
}
