import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { click, expectText } from '../spec-helpers/element.spec-helpers';

const initialCount = 100;
const newCount = 123;

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  function expectCount(expectedCount: number) {
    expectText(fixture, 'count', String(expectedCount));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.initialCount = initialCount;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('shows the initial count', () => {
    expectCount(initialCount);
  });

  it('increments the count', () => {
    click(fixture, 'increment-button');
    expectCount(initialCount + 1);
    click(fixture, 'increment-button');
    expectCount(initialCount + 2);
  });
});
