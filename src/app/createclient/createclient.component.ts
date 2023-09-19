import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Client } from '../models/client.model';
import { Conseiller } from '../models/conseiller.model';
import { CompteCourant } from '../models/compte-courant.model';
import { CompteEpargne } from '../models/compte-epargne.model';
import { CompteService } from '../services/compte.service';


@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit{
  nom = '';
  prenom = '';
  adresse = '';
  tel = '';
  codePostal = '';
  ville = '';

  conseiller!: Conseiller;
  compteCourant!: CompteCourant;
  compteEpargne!: CompteEpargne;

  constructor(
    private clientService: ClientsService,
    private compteService: CompteService,
    private route: ActivatedRoute,
    private router: Router
  ) {} // Injectez le service ClientService

  ngOnInit(): void {
    const conseiller = localStorage.getItem('conseiller');
    if (conseiller) {
      this.conseiller = JSON.parse(conseiller);
    }
  }

  onSubmit() {
    const newClient: Client = {
      id: 0,
      nom: this.nom,
      prenom: this.prenom,
      adresse: this.adresse,
      tel: this.tel,
      codePostal: this.codePostal,
      ville: this.ville,
      compteCourant: this.compteCourant,
      compteEpargne: this.compteEpargne,
    };
    console.log(newClient);
    console.log('LLLLLLLLLLLLLLLLLLLLLL');
    console.log(this.conseiller.id);
    
    
    

    this.clientService.saveCustomer(newClient, this.conseiller.id).subscribe(
      (savedClient) => {
        console.log('Client enregistré avec succès : ', savedClient);
        this.router.navigate(['/listClients']);
      },
      (error) => {
        console.error("Erreur lors de l'enregistrement du client : ", error);
      }
    );
  }



}
