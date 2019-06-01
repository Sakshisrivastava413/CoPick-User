import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSelectDetailPage() {
    this.router.navigate(['select-item']);
  }

}
