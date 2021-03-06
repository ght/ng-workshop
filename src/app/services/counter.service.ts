import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0;

  private subject: BehaviorSubject<number>;

  constructor() {
    this.subject = new BehaviorSubject<number>(this.count);
  }

  getCount(): Observable<number> {
    return this.subject.asObservable();
  }

  decrement() {
    this.count -= 1;
    this.notify();
  }

  increment() {
    this.count += 1;
    this.notify();
  }

  reset(newCount: number) {
    this.count = newCount;
    this.notify();
  }

  private notify() {
    this.subject.next(this.count);
  }
}
