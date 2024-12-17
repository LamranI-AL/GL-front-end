"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const addAvionServerSide = async (formData: FormData) => {
  const avion_id = formData.get("avion_id") as string;
  const typeAvion = formData.get("typeAvion") as string;
  const capacite = parseInt(formData.get("capacite") as string, 10);
  const creat_at = formData.get("creat_at") as string;
  const anneeFabrication = formData.get("anneeFabrication") as string;
  const model = formData.get("model") as string;
  const codeIATA = formData.get("codeIATA") as string;

  const newAvion = {
    // avion_id,
    typeAvion,
    capacite,
    // creat_at: new Date(creat_at),
    anneeFabrication,
    model,
    codeIATA,
  };

  try {
    const { error } = await supabase.from("avion").insert(newAvion);
    revalidatePath("/admin/Avions"); // Réactualisation de la page Avions
    if (error) {
      throw new Error(
        "Erreur lors de l'insertion de l'avion : " + error.message
      );
    }
  } catch (error) {
    console.error("Échec de l'ajout de l'avion :", error);
  }
};
