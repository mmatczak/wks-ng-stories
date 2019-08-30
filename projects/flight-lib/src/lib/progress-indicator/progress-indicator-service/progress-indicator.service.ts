import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProgressIndicatorService {
  on() {
    console.log('ON');
  }

  off() {
    console.log('OFF');
  }
}
