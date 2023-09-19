import { HttpClient, HttpParams } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Conseiller } from '../models/conseiller.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router, private http: HttpClient) {}
  
  messageErreur : string = '';
  login = "";
  password = "";  
  showErreur = false

  onLogin() {

    const params = new HttpParams()
    .set('login', this.login)
    .set('password', this.password);
    
    this.http.get('http://localhost:8080/conseillers/auth', { params })
    .pipe(
      catchError((error) => {
        this.showErreur = true
        this.messageErreur = 'Nom d\'utilisateur ou mot de passe invalide ';
       
        return throwError(error);
      })
    )
    .subscribe(response => {
      
      const conseiller = response as Conseiller;
      localStorage.setItem('conseiller', JSON.stringify(conseiller));
      this.router.navigate(['/listClients']);
    });
 
  }

  
  
  

}
