import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_KEY } from '../app.constants';

@Injectable({
  providedIn: "root"
})
export class GeocodeService {
  constructor(private http: HttpClient) {}

  reverseGeocode(lat: number, lng: number) {
    return this.http
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          latlng: `${lat}, ${lng}`,
          region: 'in',
          key: API_KEY
        }
      })
      .toPromise();
  }
}
