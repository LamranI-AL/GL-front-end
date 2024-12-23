export interface vol {
  id: string;
  reservation_id: string;
  created_at: Date;
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
  created_at: Date;
  nom: string;
  ville: number;
  pays: Date;
  capacitePassager: number;
}
export interface Equipage {
  id: number;
  nomComplet: string;
  adress: string;
  created_at: Date;
  telephone: string;
  founction: string;
  numeroLicence: string;
  isActive: boolean;
}
export interface Avion {
  avion_id: number;
  typeAvion: string;
  capacite: Number;
  created_at: Date;
  anneeFabrication: string;
  model: string;
  codeIATA: string;
}
export interface passager {
  username: string;
  password: string;
  nationalite: string;
  dateNaissance: Date;
  email: string;
  telephone: string;
  cin: string;
  personne_type: string;
  role: string;
}
