import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  measures = [
    { type: 'JEJUM', measure_date: '06:00', measure: 188.0},
    { type: 'ALMOCO', measure_date: '13:00', measure: 88.0},
    { type: 'JANTA', measure_date: '20:00', measure: 105.0}
  ];
}
