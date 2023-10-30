import * as moment from 'moment';

export class User {
  id!: number;

  constructor(){
    this.id = 1;
  }
}

export class Measure {
  id!: number;
  medicao!: number;
  type!: 'ALMOCO';
  date!: Date;
  user = new User();

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
