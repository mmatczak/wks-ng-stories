import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlightSearchCriteria } from '../flight-overview/flight-overview.component';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {
  @Input()
  value: FlightSearchCriteria;

  @Output()
  valueChange = new EventEmitter<FlightSearchCriteria>();

  constructor() {
  }

  ngOnInit() {
  }

}
