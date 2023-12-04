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

  result: any;
  res: any;
  alarmLoading: boolean = false;
  x: any;

  hours: string= '00';
  minutes: string= '00';

  first: any = 0;
  second: any = 0;
  counter: number = 0;


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
    this.currentTime();
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
          aspectRatio: 2.5
        }

      });
    }

    currentTime(){
      /* this.ora = new Date().toLocaleTimeString('en-GB', { hour: "numeric",
      minute: "numeric"});
      console.log('function',this.ora);
      console.log(this.ora=='14:24');     */
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = this.checkTime(m);
      s = this.checkTime(s);
      this.result = h + ":" + m + ":" + s;
      setTimeout(()=>{
        if ((`${h}:${m}:${s}`)==`${this.res}:02`) {
          this.alarmLoading = false;
          this.playSound();
          alert('HORA DA INSULINA!!!!');
          this.pauseSound();
        }
        this.currentTime();
      },1000);
    }

    checkTime(i:any){
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }

    addFirstDigit(){
      if(this.first<23){
          if (this.first<9) {
            this.first += 1;
            this.hours= '0' + this.first;
          }else{
            this.first += 1;
            this.hours = this.first;
          }
      }else{
          this.first = 0;
          this.hours = '00';
      }
    }

    removeFirstDigit(){
      if (this.first>0) {
        if (this.first<=10) {
          this.first -= 1;
          this.hours= '0' + this.first;
        }else{
          this.first -= 1;
          this.hours = this.first;
        }
      }else{
        this.first = 23;
        this.hours = '23';
      }
    }

    addSecondDigit(){
      if(this.second<59){
        if (this.second<9) {
          this.second += 1;
          this.minutes = '0' + this.second;
        }else{
          this.second += 1;
          this.minutes = this.second;
        }
      }else{
        this.second = 0;
        this.minutes = '00';
      }
    }

    removeSecondDigit(){
      if (this.second>0) {
        if (this.second<=10) {
          this.second -= 1;
          this.minutes= '0' + this.second;
        }else{
          this.second -= 1;
          this.minutes = this.second;
        }
      }else{
        this.second = 59;
        this.minutes = '59';
      }
    }

    alarm(x:any,y:any){
      this.res = `${x}:${y}`;
      this.alarmLoading = true;
      alert(`Alarm set to ${this.res}`);
    }

    playSound(){
      this.x = document.getElementById("myAudio");
      this.x.play();
    }

    pauseSound(){
      this.x = document.getElementById("myAudio");
      this.x.pause();
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

