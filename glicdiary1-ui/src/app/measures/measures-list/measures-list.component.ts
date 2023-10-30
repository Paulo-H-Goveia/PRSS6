import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MeasuresService } from '../measure.service';

@Component({
  selector: 'app-measures-list',
  templateUrl: './measures-list.component.html',
  styleUrls: ['./measures-list.component.css']
})
export class MeasuresListComponent {

  measures = [];

  constructor(private measureService: MeasuresService, private router: Router){}

  ngOnInit(): void{
    this.list();
  }

  list(): void{
    this.measureService.listByUser().then(result => {this.measures = result});
  }

  goToPage(){
    this.router.navigate(['/measures/new']);
  }

  /*measures = [
    { type: 'JEJUM', measure_date: '06:00', measure: 188.0},
    { type: 'ALMOCO', measure_date: '13:00', measure: 88.0},
    { type: 'JANTA', measure_date: '20:00', measure: 105.0}
  ];*/
}
