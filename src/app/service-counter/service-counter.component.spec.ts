import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ServiceCounterComponent } from './service-counter.component';
import { CounterService } from '../services/counter.service';

const count = 0;

type PartialCounterService = Pick<CounterService,
  'getCount' | 'increment' | 'decrement' | 'reset'>;

const mockCounterService: PartialCounterService = {
  getCount() {
    return of(count);
  },
  increment() {},
  decrement() {},
  reset() {},
};

describe('ServiceCounterComponent', () => {
  let fixture: ComponentFixture<ServiceCounterComponent>;

  beforeEach(async(() => {
    spyOn(mockCounterService, 'getCount').and.callThrough();
    spyOn(mockCounterService, 'increment');
    spyOn(mockCounterService, 'decrement');
    spyOn(mockCounterService, 'reset');

    TestBed.configureTestingModule({
      declarations: [ ServiceCounterComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCounterComponent);
    fixture.detectChanges();
  });
});
