import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteService } from '../services/compte.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit{


  ngOnInit(): void {
  }

  // compteBancaire$!: Observable<Compte>;
  // compteCourantUptadeForm: FormGroup = this.fb.group({
  //   id: [''],
  //   numeroDeCompte: [''],
  //   typeDeCompte: [''],
  //   nameClient: [''],
  //   overDraft: ['', Validators.required],
  //   tauxInteret: [''],
  //   solde: ['', Validators.required],
  // });

  // showConfirmationMessage = false;
  // showErrorMessage = false;
  // constructor(private compteBancaireService: CompteService, 
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private fb: FormBuilder){}

  // ngOnInit(): void {
  //   const compteBancaireId = +this.route.snapshot.params['id'];
  //   this.compteBancaire$ = this.compteBancaireService.getCompteCourantById(compteBancaireId);

  //   this.compteBancaire$.subscribe((compteBancaire) => {
  //     this.compteCourantUptadeForm.patchValue({
  //       id: compteBancaire.id,
  //       numeroDeCompte: compteBancaire.numerodecompte,
  //       typeDeCompte: compteBancaire.typeDeCompte,
  //       nameClient: compteBancaire.nameClient,
  //       tauxInteret: compteBancaire.tauxInteret
  //     });
  //   });      
  // }
  // updateCompte() {
  //   if (this.compteCourantUptadeForm.valid) {
  //     const updatedCompte: CompteBancaire = this.compteCourantUptadeForm.value;
  //     this.compteBancaireService.updateCompteCourant(updatedCompte).subscribe(
  //       (res) => {
  //         this.showConfirmationMessage = true;
  //         console.log("Compte mis à jour avec succès", res);
  //       },
  //       (error) => {
  //         console.error("Erreur lors de la mise à jour du compte", error);
  //         this.showErrorMessage = true;
  //       }
  //     );
  //   } else {
  //     console.error("Formulaire invalide. Veuillez corriger les erreurs");
  //     this.showErrorMessage = true;
  //   }
  // }

  // onBackButton(){
  //   this.router.navigate(['navbar']);
  // }

}
