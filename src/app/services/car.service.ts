import { HttpClient } from '@angular/common/http'; //back-end datasına ulaşmayı sağlar.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';


@Injectable({ //Enjekte edilecek servis
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44323/api/cars/getall';

  constructor(private httpClient: HttpClient) { } //HttpClient enjekte edildi.

  getCars():Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl); //constructor' da tanımlanan değişkene diğer fonksiyonlardan erişilebilir.
      
  }
}
