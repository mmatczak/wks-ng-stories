import { NgModule } from '@angular/core';
import { FlightOverviewComponent } from './components/flight-overview/flight-overview.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FlightOverviewComponent, SearchCriteriaComponent, SearchResultsComponent],
  imports: [
    SharedModule
  ]
})
export class FlightModule {
}
