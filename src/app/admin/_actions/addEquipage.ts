"use server";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const addEquipageServerSide = async (formData: FormData) => {
  const nomComplet = formData.get("nomComplet") as string;
  const addresse = formData.get("adress") as string;
  //   const creat_at = formData.get("creat_at") as string;
  const telephone = formData.get("telephone") as string;
  const fonction = formData.get("founction") as string;
  const numeroLicence = formData.get("numeroLicence") as string;
  // const isActive = formData.get("isActive") === "on"; // Checkbox returns "on" when checked

  const newEquipage = {
    nomComplet,
    addresse,
    // creat_at: new Date(creat_at),
    telephone,
    fonction,
    numeroLicence,
    isActive: false,
  };

  try {
    const { error } = await supabase.from("equipage").insert(newEquipage);
    revalidatePath("/admin/Pilotes");
    if (error) {
      throw new Error("Error inserting equipage: " + error.message);
    }
  } catch (error) {
    console.error("Failed to add equipage:", error);
  }
};
