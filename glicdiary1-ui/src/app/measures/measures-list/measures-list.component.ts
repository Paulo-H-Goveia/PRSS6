import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';
import {Chart} from 'chart.js';


import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../../security/auth.service';
import { MeasuresService } from '../measure.service';


@Component({
  selector: 'app-measures-list',
  templateUrl: './measures-list.component.html',
  styleUrls: ['./measures-list.component.css']
})
export class MeasuresListComponent {

  measures = [];
  header = 'GlicDiary';
  public chart: any;


  constructor(
    private measureService: MeasuresService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService,
    private elemento: ElementRef
    ){}

  ngOnInit(): void{
    this.createChart();
    this.title.setTitle('Listagem de Medições');
    this.list();
  }

  list(): void{
    this.measureService.listByUser().then(result => {this.measures = result}).catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(measure: any): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remove(measure);
      }
    });
  }

  remove(measure: any): void {
      this.measureService.remove(measure.id)
        .then(() => {
          this.list();
          this.messageService.add({ severity: 'success', detail: 'Medição excluída com sucesso!' });
        }).catch(error => this.errorHandler.handle(error));
    }

    createChart(){

      this.chart = new Chart("MyChart", {
        type: 'line', //this denotes tha type of chart

        data: {// values on X-Axis
          labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
           datasets: [
            {
              label: "JEJUM",
              data: ['467','576', '572', '79', '92',
                   '574', '573', '576'],
              backgroundColor: 'blue'
            },
            {
              label: "ALMOCO",
              data: ['542', '542', '536', '327', '17',
                     '0.00', '538', '541'],
              backgroundColor: 'limegreen'
            },
            {
              label: "JANTA",
              data: ['122','222', '100', '321', '99',
                   '123', '223', '332'],
              backgroundColor: 'pink'
            }
          ]
        },
        options: {
          responsive: true,
          aspectRatio: 1.9
        }

      });
    }


  }
  /*goToPage(){
    this.router.navigate(['/measures/new']);
  }

  measures = [
    { type: 'JEJUM', measure_date: '06:00', measure: 188.0},
    { type: 'ALMOCO', measure_date: '13:00', measure: 88.0},
    { type: 'JANTA', measure_date: '20:00', measure: 105.0}
  ];*/

