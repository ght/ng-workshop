import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'test1';

  public logCount(count: number) {
    console.log(`Count is ${count}.`);
  }
}
