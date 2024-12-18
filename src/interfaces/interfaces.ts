export interface vol {
  id: string;
  reservation_id: string;
  creat_at: Date;
  codeIATA: string;
  numVol: number;
  startDate: Date;
  endDate: Date;
  aeroportOrigin: string;
  aeroportDestination: string;
  prixVol: number;
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
export interface Avion {
  avion_id: number;
  typeAvion: string;
  capacite: Number;
  creat_at: Date;
  anneeFabrication: string;
  model: string;
  codeIATA: string;
}
