export class Clients {

    id:Number = 0 ;
    nom : string;
    prenom: string;
    email : string;
    adresse: string;

    constructor( nom:string, prenom:string,email:string, adresse:string){   

        this.nom =nom
        this.prenom = prenom
        this.email = email
        this.adresse = adresse
    }
}
