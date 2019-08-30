import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProgressIndicatorService {
  private changesSubject = new BehaviorSubject<boolean>(false);

  changes = this.changesSubject.asObservable();

  private delayTimeInMillis = 1000;
  private delayHandle: number | null = null;


  on() {
    this.delayHandle = setTimeout(() => {
      this.changesSubject.next(true);
      this.delayHandle = null;
    }, this.delayTimeInMillis);

    console.log('ON');
  }

  off() {
    if (this.delayHandle != null) {
      clearTimeout(this.delayHandle);
    } else {
      this.changesSubject.next(false);
    }
    console.log('OFF');
  }
}
