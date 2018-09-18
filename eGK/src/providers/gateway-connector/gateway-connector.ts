import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PropertiesProvider} from "../properties/properties";

@Injectable()
export class GatewayConnectorProvider {

  constructor(private properties: PropertiesProvider, public http: HttpClient) {
  }

  get(uuid: string) {
    let params = new HttpParams().set('uuid', uuid).set('responseType', 'text');
    return this.http.get<CipherObject>(this.properties.value['gateway.server'], {params: params})
  }

}
