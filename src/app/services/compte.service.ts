import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteCourant } from '../models/compte-courant.model';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private apiUrl = 'http://localhost:8080/comptes';

  constructor(private http: HttpClient) {}

  getCompte(): Observable<CompteCourant[]> {
    return this.http.get<CompteCourant[]>(this.apiUrl);
  }

  saveCompte(client: CompteCourant, idClient: number): Observable<CompteCourant> {
    const url = `${this.apiUrl}/${idClient}`;
    return this.http.post<CompteCourant>(url, client);
  }
  getComptesByIdClient(clientId: number): Observable<Compte[]>{
     
    return this.http.get<Compte[]>(`http://localhost:8080/comptes/comptesByIdClient?id=`+ clientId)
   }
}
