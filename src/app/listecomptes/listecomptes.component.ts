import { Component , OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { Compte } from '../models/compte';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from '../services/compte.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listecomptes',
  templateUrl: './listecomptes.component.html',
  styleUrls: ['./listecomptes.component.css']
})
export class ListecomptesComponent implements OnInit{

  client!:Client
  comptesBancaires$!: Observable<Compte[]>;
  //listecomptes!: any

  constructor(private clienServ: ClientsService, private compteService: CompteService, private acRoute: ActivatedRoute) { }

  ngOnInit(){

    this.acRoute.params.subscribe( (p) => {
      this.clienServ.getById(p['id']).subscribe( data  => {
        console.log(data)
        this.client = data
      })
      this.comptesBancaires$ = this.compteService.getComptesByIdClient(p['id'])
      console.log(this.comptesBancaires$);
      
      
   
    })
  }

}
