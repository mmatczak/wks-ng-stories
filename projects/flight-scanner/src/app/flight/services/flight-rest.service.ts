import { FlightSearchCriteria } from '../components/flight-overview/flight-overview.component';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightRestService {
  constructor(private http: HttpClient) {
  }

  find(searchCriteria: FlightSearchCriteria): Observable<Flight[]> {
    const params = Object.entries(searchCriteria)
      .reduce(
        (accParams, [key, value]) => value ? accParams.append(key, value) : accParams,
        new HttpParams());

    return this.http.get<Flight[]>('api/flights', {params}).pipe(delay(1000));
  }
}
