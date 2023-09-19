import { Component , OnInit } from '@angular/core';
import { Conseiller } from '../models/conseiller.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  conseiller!: Conseiller

  constructor(private router : Router){

  }
  ngOnInit() {

    const conseiller = localStorage.getItem('conseiller')
    if(conseiller){
      this.conseiller = JSON.parse(conseiller)
    }
  }

}
