import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {

  }

  // Requisição POST para geração do PreferenceId
  public setPayment(item): Observable<any> {
    return this.http.post(`https://api.mercadopago.com/checkout/preferences?access_token=TEST-`
    + `1314227249953599-021414-d405e13de8bd66899d8fd8acc6c8156e-526895169`, item);
  }

}
