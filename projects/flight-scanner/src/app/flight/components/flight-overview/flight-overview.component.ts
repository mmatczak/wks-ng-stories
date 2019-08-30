import { Component, OnInit } from '@angular/core';
import { FlightRestService } from '../../services/flight-rest.service';
import { Flight } from '../../model/flight.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';


export interface FlightSearchCriteria {
  originCode?: string;
  destinationCode?: string;
}

@Component({
  selector: 'app-flight-overview',
  templateUrl: './flight-overview.component.html',
  styleUrls: ['./flight-overview.component.scss']
})
export class FlightOverviewComponent {
  searchCriteria: FlightSearchCriteria = {};

  results$: Observable<Flight[]>;

  constructor(private readonly flights: FlightRestService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
    this.results$ = route.params
      .pipe(
        tap(searchCriteria => this.searchCriteria = searchCriteria),
        switchMap(searchCriteria => this.flights.find(searchCriteria))
      );
  }

  search(searchCriteria: FlightSearchCriteria) {
    this.router.navigate([searchCriteria], {relativeTo: this.route});
  }
}
