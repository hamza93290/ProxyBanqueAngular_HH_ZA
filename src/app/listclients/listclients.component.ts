import { Component, OnInit, Output } from '@angular/core';
import { Clients } from '../models/clients';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {

@Output()
client!: Clients[] 

constructor( private cs: ClientsService) {}




  ngOnInit() {
    this.cs.getClients().subscribe(data => this.client = data)
  }

  deleteClient(id:Number){
    console.log("et oui");
    
  }

}
