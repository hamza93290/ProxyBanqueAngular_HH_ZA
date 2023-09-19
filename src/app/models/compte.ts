export interface Compte {
    
    id: number;
    numerodecompte: number;
    nameClient: string;
    typeDeCompte: string ;
    overDraft: number ;
    tauxInteret: number ;
    solde: number;
    
    //listTransaction:any[]
}
