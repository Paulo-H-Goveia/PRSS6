import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

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


  constructor(
    private measureService: MeasuresService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService
    ){}

  ngOnInit(): void{
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

  }

  /*goToPage(){
    this.router.navigate(['/measures/new']);
  }

  measures = [
    { type: 'JEJUM', measure_date: '06:00', measure: 188.0},
    { type: 'ALMOCO', measure_date: '13:00', measure: 88.0},
    { type: 'JANTA', measure_date: '20:00', measure: 105.0}
  ];*/

