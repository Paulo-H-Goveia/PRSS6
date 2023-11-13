import * as moment from 'moment';
import { AuthService } from '../security/auth.service';

export class User {
  id!: number;
  name!: string;
  email!: string;
  cpf!: number;
  password!: string;
  active = true;
}

export class Measure {
  id!: number;
  medicao!: number;
  type!: 'ALMOCO';
  date!: Date;
  user: any;

  constructor(user_id: number){
    this.user = new User();
    this.user.id = user_id;
  }

  static toJson(measuresModule: Measure): any {
    return {
      id: measuresModule.id,
      medicao: measuresModule.medicao,
      type: measuresModule.type,
      date: moment(measuresModule.date).format('DD/MM/YYYY'),
      user: measuresModule.user
    }
  }
}
