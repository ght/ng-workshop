import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducers } from './reducers';

// Components
import { CounterComponent } from './counter/counter.component';
import { NgRxCounterComponent } from './ngrx-counter/ngrx-counter.component';
import { ServiceCounterComponent } from './service-counter/service-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ServiceCounterComponent,
    NgRxCounterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
