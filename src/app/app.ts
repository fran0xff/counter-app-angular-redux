import { Component } from '@angular/core';
import { Counter } from './components/counter';

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
})
export class App {
  protected title = 'counter-app-angular-redux';
}
