import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlightSearchCriteria } from '../flight-overview/flight-overview.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent {
  @Input()
  set value(searchCriteria: FlightSearchCriteria) {
    this.searchCriteriaForm.reset(searchCriteria);
  }

  @Output()
  valueChange = new EventEmitter<FlightSearchCriteria>();

  searchCriteriaForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.searchCriteriaForm = fb.group({
      originCode: '',
      destinationCode: '',
    });
  }
}
