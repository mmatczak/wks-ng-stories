import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FlightOverviewComponent } from './flight/components/flight-overview/flight-overview.component';
import { FlightModule } from './flight/flight.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
