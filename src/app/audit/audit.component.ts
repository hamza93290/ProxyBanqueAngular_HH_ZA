import { Component } from '@angular/core';
import { CompteCourant } from '../models/compte-courant.model';
import { CompteService } from '../services/compte.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent {

  comptes!: CompteCourant[];

  constructor(private comptesServ: CompteService) {}

  ngOnInit() {
    this.loadComptes();
  }

  loadComptes() {
    this.comptesServ.getCompte().subscribe((data) => {
      const comptesCourants = data.filter(
        (compte) => compte.type == 'Compte Courant' && compte.solde <= -1
      );
    
      this.comptes = comptesCourants;
      console.log(this.comptes)

    });  
  }


}
