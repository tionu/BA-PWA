import {Injectable} from '@angular/core';

@Injectable()
export class PropertiesProvider {

  value: any;

  constructor() {
    this.value = {};
    this.value['gateway.server'] = "https://egkdata.studipark.de/read/";
  }

}
