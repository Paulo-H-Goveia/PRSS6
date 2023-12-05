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
  jejum: any[]=[];
  almoco:any[]=[];
  janta:any[]=[];
  xAxis: any[] = [];
  axis: any[] = [];

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
    this.currentTime();
    this.createChart();
    this.title.setTitle('Listagem de Medições');
    this.list();
  }

  list(): void{
    this.measureService.listByUser().then(resulta => {this.measures = resulta;}).catch(error => this.errorHandler.handle(error));
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
      this.measureService.listByUser().then(resulta => {
        let list: any[] = resulta;
        for (let index = 0; index < list.length; index++) {
          this.xAxis[index] = list[index].date;
          if (list[index].type == 'JEJUM') {
            this.jejum.push(list[index].measure);
          } else if (list[index].type == 'ALMOCO') {
            this.almoco.push(list[index].measure);
          } else if (list[index].type == 'JANTA') {
            this.janta.push(list[index].measure);
          }
        };
        for (let index = 0; index < this.xAxis.length; index++) {
          if (this.xAxis[index]!=this.xAxis[index-1]) this.axis.push(this.xAxis[index]);
        };
        this.chart = new Chart("MyChart", {
          type: 'bar', //this denotes tha type of chart

          data: {// values on X-Axis

            labels: this.axis,
             datasets: [
              {
                label: "JEJUM",
                data: this.jejum,
                backgroundColor: 'blue'
              },
              {
                label: "ALMOCO",
                data: this.almoco,
                backgroundColor: 'limegreen'
              },
              {
                label: "JANTA",
                data: this.janta,
                backgroundColor: 'pink'
              }
            ]
          },
          options: {
            responsive: true,
            aspectRatio: 2.5
          }
        });
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
