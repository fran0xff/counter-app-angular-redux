import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
})
export class Counter {

  title: string = 'Counter';

  counter: number = 0;

  constructor(private store: Store<{counter: number}>) {
    //this.counter = 0;
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }
  increment(): void {
    // this.counter = this.counter! + 1;
    this.store.dispatch(increment({add: 2}));
    console.log('incrementando...');
  }
  decrement(): void {
    // this.counter = this.counter! - 1;
    this.store.dispatch(decrement());
    console.log('decrementando...');
  }
  reset(): void {
    // this.counter = 0;
    this.store.dispatch(reset());
    console.log('reset el contador...');
  } 
}
