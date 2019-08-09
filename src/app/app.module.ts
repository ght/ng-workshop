import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ServiceCounterComponent } from './service-counter/service-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ServiceCounterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
