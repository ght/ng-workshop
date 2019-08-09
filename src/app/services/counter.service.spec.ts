import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let counterService: CounterService;

  function expectCount(expectedCount: number) {
    let actualCount: number | undefined;
    counterService.getCount().subscribe((count) => {
      actualCount = count;
    });
    expect(actualCount).toBe(expectedCount);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    counterService = TestBed.get(CounterService);
  });

  it('returns the count', () => {
    expectCount(0);
  });

  it('increments the count', () => {
    counterService.increment();
    expectCount(1);
    counterService.increment();
    expectCount(2);
  });

  it('decrements the count', () => {
    counterService.decrement();
    expectCount(-1);
    counterService.decrement();
    expectCount(-2);
  });

  it('resets the count', () => {
    const newCount = 1234;
    counterService.reset(newCount);
    expectCount(newCount);
  });
});
