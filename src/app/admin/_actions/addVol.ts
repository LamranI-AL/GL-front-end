"use server";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const addVolServerSide = async (formData: FormData) => {
  const IATAvion = formData.get("IATAvion") as string;
  const volNum = formData.get("volNum");
  const Origine = formData.get("Origine");
  const Destination = formData.get("Destination");
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const namePilote = formData.get("namePilote") as string;
  const nameCoPilote = formData.get("nameCoPilote") as string;
  const normalizedpiloteName = namePilote.toLowerCase();
  const normalizedCopiloteName = nameCoPilote.toLowerCase();
  const newVol = {
    codeIATA: IATAvion,
    numVol: volNum,
    aeroportOrigin: Origine,
    aeroportDestination: Destination,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };
  try {
    console.log("Insertion du vol en cours...");
    const { error: insertError } = await supabase.from("vol").insert(newVol);

    if (insertError) {
      throw new Error("Erreur d'insertion : " + insertError.message);
    }
    console.log("Vol inséré avec succès.");

    // Vérification de la date actuelle pour désactiver pilote/copilote
    // const currentDate = new Date();
    // if (currentDate >= new Date(endDate)) {
    console.log("Mise à jour des statuts des pilotes...");

    // Mettre à jour le pilote
    const { error: piloteError } = await supabase
      .from("equipage")
      .update({ isActive: true })
      .eq("nomComplet", normalizedpiloteName);

    if (piloteError) {
      throw new Error("Erreur de mise à jour pilote : " + piloteError.message);
    }

    // Mettre à jour le copilote
    const { error: copiloteError } = await supabase
      .from("equipage")
      .update({ isActive: true })
      .eq("nomComplet", normalizedCopiloteName);

    if (copiloteError) {
      throw new Error(
        "Erreur de mise à jour copilote : " + copiloteError.message
      );
    }

    console.log("Statuts des pilotes mis à jour : isActive = false");
    // }

    revalidatePath("/admin/Vols"); // Rafraîchissement de la page
  } catch (error) {
    console.error("Erreur :", error);
  }
};
