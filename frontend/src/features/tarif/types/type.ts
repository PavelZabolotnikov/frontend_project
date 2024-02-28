export type Tarif = {
    id:number;
    title:string;
    description:string;
    price:number;
};
 export type State = {
    tarifs: Tarif[];
    oneTarif: Tarif;
    error: undefined|string;
 }