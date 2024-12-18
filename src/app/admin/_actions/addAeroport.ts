"use server";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const addAirportServerSide = async (formData: FormData) => {
  const nom = formData.get("nom") as string;
  const ville = formData.get("ville") as string;
  const pays = formData.get("pays") as string;
  const capacitePassager = parseInt(formData.get("capacitePassager") as string);

  const newAirport = {
    nom,
    ville,
    pays,
    capacitePassager,
  };

  try {
    const { error } = await supabase.from("aeroport").insert(newAirport);
    revalidatePath("/admin/Aeroport");
    if (error) {
      throw new Error("Erreur d'insertion : " + error.message);
    }
  } catch (error) {
    console.error("Échec de l'ajout de l'aéroport :", error);
  }
};
