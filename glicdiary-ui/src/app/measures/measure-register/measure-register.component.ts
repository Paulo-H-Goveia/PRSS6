import { MeasureService } from '../measure.service';
import { Measure } from '../../core/model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-measure-register',
  templateUrl: './measure-register.component.html',
  styleUrls: ['./measure-register.component.css']
})
export class MeasureRegisterComponent {

  types = [
    { label: 'Jejum', value: 'JEJUM' },
    { label: 'Almoco', value: 'ALMOCO' },
    { label: 'Correcao', value: 'CORRECAO' },
    { label: 'Janta', value: 'JANTA' }
  ];

  measure = new Measure(this.auth.jwtPayload?.user_id);

  constructor(
    private measureService: MeasureService,
    private auth: AuthService
  ){}

  save(measureForm: NgForm): void {
    this.measureService.add(this.measure)
      .then(() => {
        console.log('Atividade adicionada com sucesso!');
        measureForm.reset();
        this.measure = new Measure(this.auth.jwtPayload?.user_id);
      })
      .catch(erro => console.log(erro));
  }
}
