import * as moment from 'moment';

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
  measures!: number;
  type!: 'ALMOCO';
  date!: Date;
  user: any;

  constructor(user_id: number){
    this.user = new User();
    this.user.id = user_id;
  }

  static toJson(measure: Measure): any {
    return {
      id: measure.id,
      measure: measure.measures,
      type: measure.type,
      date: moment(measure.date).format('DD/MM/YYYY'),
      user: measure.user
    }
  }
}
