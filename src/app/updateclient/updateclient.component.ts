import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {
  userForm!: FormGroup

  constructor(private fb:FormBuilder, private acRoute: ActivatedRoute, private ClientService: ClientsService, private router: Router){

  }
  ngOnInit(){

    this.userForm = this.fb.group({
      id:[''],
      nom:[''],
      prenom:[''],
      ville:[''],
      adresse:[''],
      codePostal:[''],
      tel:[''],
      conseiller_id:[''],
      compteCourant:[''],
      compteEpargne: ['']

    })
    this.acRoute.params.subscribe( (p) => {
      this.ClientService.getById(p['id']).subscribe( client => {
        this.userForm.setValue(client)
        console.log(p['id'])
      })
    })
   }
  onSubmit(){
    console.log(this.userForm.value);
    
    this.ClientService.updateCustomer(this.userForm.value).subscribe(() => {
      this.router.navigate(['/listClients'])
     }
  
  )}

  }
