import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  getClients() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getCustomerById(customerId: number): Observable<Client> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.get<Client>(url);
  }

  saveCustomer(client: Client, id: number): Observable<Client> {
    return this.http.post<Client>(this.apiUrl + '/conseiller/' + id, client);
  }

  deleteCustomer(customerId: number): Observable<string> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.delete(url,  { responseType: 'text' });
  }

  updateCustomer(client: Client): Observable<Client> {
    console.log(client.id+ " et oui");
    
    const url = `${this.apiUrl}/${client.id}`;
    return this.http.put<Client>(url, client);
  }
  getById(id : number){
    return this.http.get<Client>(this.apiUrl + "/" + id)
  }
}
