import { Component, OnInit } from '@angular/core';


export interface FlightSearchCriteria {
  originCode?: string;
  destinationCode?: string;
}

@Component({
  selector: 'app-flight-overview',
  templateUrl: './flight-overview.component.html',
  styleUrls: ['./flight-overview.component.scss']
})
export class FlightOverviewComponent implements OnInit {
  searchCriteria: FlightSearchCriteria = {
    destinationCode: 'WRO',
    originCode: 'POZ'
  };

  constructor() { }

  ngOnInit() {
  }

  search(searchCriteria: FlightSearchCriteria) {
    console.log(searchCriteria);
  }
}
