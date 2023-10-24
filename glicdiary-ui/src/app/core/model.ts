import * as moment from 'moment';

export class User {
  id!: number;
}

export class Measure {
  id!: number;
  type!: 'JEJUM';
  date!: Date;
  distance!: number;
  duration!: number;
  user: any;

  constructor(user_id: number){
    this.user = new User();
    this.user.id = user_id;
  }

  static toJson(measure: Measure): any {
    return {
      id: measure.id,
      type: measure.type,
      date: moment(measure.date).format('DD/MM/YYYY'),
      distance: measure.distance,
      duration: measure.duration,
      user: measure.user
    }
  }
}
