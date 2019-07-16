import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getList(callback) {
    const list = [
      new Coffee('Double Espresso', 'Sunny Cafe', new PlaceLocation('123 Market St', 'San Francisco')),
      new Coffee('Double Espresso2', 'Sunny Cafe2', new PlaceLocation('1234 Market St', 'San2 Francisco'))

    ];
    callback(list);
  }

  save(coffee, callback) {
    callback(true);
  }
}
