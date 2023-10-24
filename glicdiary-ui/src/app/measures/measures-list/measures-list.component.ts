import { MeasureService } from '../measure.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-measures-list',
  templateUrl: './measures-list.component.html',
  styleUrls: ['./measures-list.component.css']
})
export class MeasuresListComponent {
  title = 'iFitness';
  measures = [];

  constructor(private activityService: MeasureService){}

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.activityService.listByUser()
      .then(result => {
        this.measures = result;
      })
  }
}
