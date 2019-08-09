import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnChanges {
  @Input()
  public initialCount = 0;

  @Output()
  public countChange = new EventEmitter<number>();

  public count = 0;

  ngOnChanges() {
    this.count = this.initialCount;
  }

  private emitChange() {
    this.countChange.emit(this.count);
  }

  public decrement() {
    this.count -= 1;
    this.emitChange();
  }

  public increment() {
    this.count += 1;
    this.emitChange();
  }

  public reset(value: string) {
    this.count = parseInt(value, 10);
  }
}
