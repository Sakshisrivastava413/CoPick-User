import { Component } from "@angular/core";
import { GeocodeService } from "../services/geocode.service";
import { Route, Router } from '@angular/router';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  title: string = "My first AGM project";
  lat: number = 51.678418;
  lng: number = 7.809007;
  currentAdd: string;

  constructor(
    private geocode: GeocodeService,
    private router: Router
    ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.geocode
          .reverseGeocode(this.lat, this.lng)
          .then((res: any) => this.currentAdd = res.results[0].formatted_address);
      });
    }
  }

  goToItemDetailPage() {
    this.router.navigate(['item-details']);
  }
}
