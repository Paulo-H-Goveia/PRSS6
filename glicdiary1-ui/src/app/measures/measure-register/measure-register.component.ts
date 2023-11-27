import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { MeasuresService } from './../measure.service';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Measure } from './../../core/model'
import { AuthService } from './../../security/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-measure-register',
  templateUrl: './measure-register.component.html',
  styleUrls: ['./measure-register.component.css']
})
export class MeasureRegisterComponent {

  types = [
    { label: 'Jejum', value: 'JEJUM' },
    { label: 'Almoço', value: 'ALMOCO' },
    { label: 'Correção', value: 'CORRECAO' },
    { label: 'Janta', value: 'JANTA' }
  ];

 measure = new Measure(this.auth.jwtPayload?.user_id);

 constructor(
    private measureService: MeasuresService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
    ){}


    ngOnInit(): void {
     const id = this.route.snapshot.params[`id`];
      if(id != 'new'){
        this.loadMeasure(id);
      }
      this.title.setTitle('Cadastro de Medição');
    }

    get editing(): boolean {
      return Boolean(this.measure.id);
    }

    loadMeasure(id: number) {
      this.measureService.findById(id)
        .then(measure => {
          this.measure = measure;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    save(measureForm: NgForm){
      if(this.editing){
        this.updateMeasure(measureForm);
      }else{
        this.addMeasure(measureForm);
      }
    }

    updateMeasure(measureForm: NgForm) {
      this.measureService.update(this.measure)
        .then( measure => {
          this.messageService.add({ severity: 'success', detail: 'Medição editada com sucesso!' });
          this.measure = measure;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    addMeasure(measureForm: NgForm) {
      this.measureService.add(this.measure)
      .then((addedMeasure) => {
        this.messageService.add({ severity: 'success', detail: 'Medição adicionada com sucesso!' });
        this.loadMeasure(addedMeasure.id);
        this.router.navigate(['/measures', addedMeasure.id]);
      })
      .catch(error => this.errorHandler.handle(error));
    }

    /*new(measureForm: NgForm){
      this.measure = new Measure(this.auth.jwtPayload?.user_id);
      measureForm.reset();
      this.router.navigate(['/measures/new']);
    }*/

}
