import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FlightOverviewComponent } from './flight/components/flight-overview/flight-overview.component';
import { FlightModule } from './flight/flight.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/flights', pathMatch: 'full'},
      {path: 'flights', component: FlightOverviewComponent}
    ]),
    SharedModule,
    FlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
