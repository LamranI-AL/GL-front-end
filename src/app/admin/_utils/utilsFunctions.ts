import { supabase } from "@/lib/supabase";

export const checkAeroport = async (nameAeroport: string) => {
  try {
    // Convertir le nom en minuscule pour la comparaison
    const normalizedAeroportName = nameAeroport.toLowerCase();

    // Récupérer les données depuis la base de données
    const { data, error } = await supabase.from("aeroport").select("nom");

    // Gérer les erreurs éventuelles
    if (error) {
      console.error(
        "Erreur lors de la récupération des aéroports :",
        error.message
      );
      return false; // Par défaut, retourner false en cas d'erreur
    }

    // Vérifier si l'aéroport existe
    const aeroportExists = data?.some(
      (aeroport) => aeroport.nom.toLowerCase() === normalizedAeroportName
    );

    return !!aeroportExists; // Retourner true si trouvé, sinon false
  } catch (err) {
    console.error("Erreur inattendue :", err);
    return false; // Par défaut, retourner false en cas d'erreur
  }
};
export const checkIATA = async (IATAserie: string) => {
  try {
    // Convertir le nom en minuscule pour la comparaison
    const normalizedCodeIATA = IATAserie.toLowerCase();

    // Récupérer les données depuis la base de données
    const { data, error } = await supabase.from("avion").select("codeIATA");
    console.log(data);

    // Gérer les erreurs éventuelles
    if (error) {
      console.error(
        "Erreur lors de la récupération des codeIATA :",
        error.message
      );
      return false; // Par défaut, retourner false en cas d'erreur
    }

    // Vérifier si l'aéroport existe
    const aeroportExists = data?.some(
      (aeroport) => aeroport.codeIATA.toLowerCase() === normalizedCodeIATA
    );

    return !!aeroportExists; // Retourner true si trouvé, sinon false
  } catch (err) {
    console.error("Erreur inattendue :", err);
    return false; // Par défaut, retourner false en cas d'erreur
  }
};
export const checkEquipageName = async (equipageName: string) => {
  try {
    // Convertir le nom en minuscule pour la comparaison
    const normalizedCodeIATA = equipageName.toLowerCase();

    // Récupérer les données depuis la base de données
    const { data, error } = await supabase
      .from("equipage")
      .select("nomComplet");
    console.log(data);

    // Gérer les erreurs éventuelles
    if (error) {
      console.error(
        "Erreur lors de la récupération de nom complet de equipage soit pilot ou bien co-pilote:",
        error.message
      );
      return false; // Par défaut, retourner false en cas d'erreur
    }

    // Vérifier si l'aéroport existe
    const aeroportExists = data?.some(
      (aeroport) => aeroport.nomComplet.toLowerCase() === normalizedCodeIATA
    );

    return !!aeroportExists; // Retourner true si trouvé, sinon false
  } catch (err) {
    console.error("Erreur inattendue :", err);
    return false; // Par défaut, retourner false en cas d'erreur
  }
};
