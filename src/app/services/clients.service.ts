import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private client: HttpClient) { }

  getClients():Observable<Clients[]>{
    return this.client.get<Clients[]>('http://localhost:3000/clients')
  }
}
