import { MeasuresService } from './../measure.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Measure } from './../../core/model'
import { AuthService } from './../../security/auth.service';

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

 measure = new Measure(this.auth.jwtPayload.user_id);
 /*save(form: NgForm): void{
    console.log(this.measure);
  }*/
  constructor(private measureService: MeasuresService, private auth: AuthService){}

  save(measureForm: NgForm) {
    this.measureService.add(this.measure)
      .then(() => {
        console.log('Medição adicionada com sucesso!');
        measureForm.reset();
        this.measure = new Measure(this.auth.jwtPayload.user_id);
      })
      .catch(erro => console.log(erro));
  }

}
