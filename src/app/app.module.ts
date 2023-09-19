import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateclientComponent } from './createclient/createclient.component';
import { CreateconseillerComponent } from './createconseiller/createconseiller.component';
import { ListclientsComponent } from './listclients/listclients.component';
import { ListecomptesComponent } from './listecomptes/listecomptes.component';
import { ListeconseillerComponent } from './listeconseiller/listeconseiller.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { UpdateconseillerComponent } from './updateconseiller/updateconseiller.component';
import { VirementComponent } from './virement/virement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { AuditComponent } from './audit/audit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateclientComponent,
    CreateconseillerComponent,
    ListclientsComponent,
    ListecomptesComponent,
    ListeconseillerComponent,
    NavbarComponent,
    UpdateclientComponent,
    UpdateconseillerComponent,
    VirementComponent,
    UpdateCompteComponent,
    AuditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
