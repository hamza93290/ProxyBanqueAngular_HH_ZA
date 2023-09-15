import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ListclientsComponent } from './listclients/listclients.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ListeconseillerComponent } from './listeconseiller/listeconseiller.component';
import { CreateconseillerComponent } from './createconseiller/createconseiller.component';
import { UpdateconseillerComponent } from './updateconseiller/updateconseiller.component';
import { VirementComponent } from './virement/virement.component';
import { ListecomptesComponent } from './listecomptes/listecomptes.component';


const routes: Routes = [
  {path :"", component: LoginComponent},
  {path:"listClients", component : ListclientsComponent},
  {path:"nouveauClient", component : CreateclientComponent},
  {path:"modifierClient/:id", component : UpdateclientComponent},
  {path:"listConseillers", component : ListeconseillerComponent},
  {path:"nouveauConseiller", component : CreateconseillerComponent},
  {path:"modifierConseiller/:id", component : UpdateconseillerComponent},
  {path:"virement/:id", component : VirementComponent},
  {path:"listComptes/:id", component : ListecomptesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
