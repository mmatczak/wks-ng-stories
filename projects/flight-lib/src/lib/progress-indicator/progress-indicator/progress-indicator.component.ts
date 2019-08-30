import { Component, OnInit } from '@angular/core';
import { ProgressIndicatorService } from '../progress-indicator-service/progress-indicator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css']
})
export class ProgressIndicatorComponent implements OnInit {
  show$: Observable<boolean>;

  constructor(private readonly progressIndicator: ProgressIndicatorService) {
    this.show$ = progressIndicator.changes;
  }

  ngOnInit() {
  }
}
