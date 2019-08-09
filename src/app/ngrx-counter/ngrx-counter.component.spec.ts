import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../reducers';

import { NgRxCounterComponent } from './ngrx-counter.component';

describe('NgRxCounterComponent', () => {
  let component: NgRxCounterComponent;
  let fixture: ComponentFixture<NgRxCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxCounterComponent ],
      imports: [
        StoreModule.forRoot(reducers, {
          runtimeChecks: {
            strictActionImmutability: true,
            strictStateImmutability: true,
          },
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
