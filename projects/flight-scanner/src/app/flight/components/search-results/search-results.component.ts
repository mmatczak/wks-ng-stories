import { Component, Input } from '@angular/core';
import { Flight } from '../../model/flight.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input()
  value: Flight[];

  constructor() {
  }
}
