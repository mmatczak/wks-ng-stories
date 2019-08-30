import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightOverviewComponent } from './components/flight-overview/flight-overview.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



@NgModule({
  declarations: [FlightOverviewComponent, SearchCriteriaComponent, SearchResultsComponent],
  imports: [
    CommonModule
  ]
})
export class FlightModule { }
