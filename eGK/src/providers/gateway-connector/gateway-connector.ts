import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GatewayConnectorProvider {

  constructor(public http: HttpClient) {
  }

}
