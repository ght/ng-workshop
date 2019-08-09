import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { NgRxCounterComponent } from './ngrx-counter/ngrx-counter.component';
import { ServiceCounterComponent } from './service-counter/service-counter.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
        ServiceCounterComponent,
        NgRxCounterComponent,
      ],
      imports: [
        StoreModule.forRoot(reducers, {
          runtimeChecks: {
            strictActionImmutability: true,
            strictStateImmutability: true,
          },
        }),
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('test1');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test1!');
  });
});
