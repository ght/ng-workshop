import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'test1';
  public initialCounts = [0, 42, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
}
