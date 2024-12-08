export interface vol {
  id: string;
  reservation_id: string;
  creat_at: Date;
  codeIATA: string;
  numVol: number;
  date: Date;
  aeroportOrigin: string;
  aeroportDestination: string;
}
export interface Airport {
  aeroport_id: string;
  vol_id: string;
  creat_at: Date;
  nom: string;
  ville: number;
  pays: Date;
  capacitePassager: number;
}
export interface Equipage {
  id: number;
  nomComplet: string;
  adress: string;
  creat_at: Date;
  telephone: string;
  founction: string;
  numeroLicence: string;
  isActive: boolean;
}
