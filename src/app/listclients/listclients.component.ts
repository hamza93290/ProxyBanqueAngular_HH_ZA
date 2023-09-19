import { Component, OnInit, Output } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {

@Output()
client!: Client[] 

message!: string

showDeleteConfirmation = false;

constructor( private cs: ClientsService) {}




  ngOnInit() {
    this.cs.getCustomers().subscribe(data => this.client = data)
  }

  deleteClient(id:number){
    alert('voulez vraiment supprimer ce client')
    this.cs.deleteCustomer(id).subscribe(()=>{
      
      this.ngOnInit()
    });
  }

  openModal() {
    this.showDeleteConfirmation = true;
    this.message = `voulez vous supprimer ce client `
    console.log(this.showDeleteConfirmation);
  }

  closeModal() {
    this.showDeleteConfirmation = false;
  }

}
