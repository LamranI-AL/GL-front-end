"use server";
import { addEquipage } from "@/_services/equipage";
import { Equipage } from "@/interfaces/interfaces";
import { revalidatePath } from "next/cache";

export const addEquipageServerSide = async (formData: FormData) => {
  const nomComplet = formData.get("nomComplet") as string;
  const addresse = formData.get("adress") as string;
  const telephone = formData.get("telephone") as string;
  const fonction = formData.get("founction") as string;
  const numeroLicence = formData.get("numeroLicence") as string;

  const newEquipage: Equipage | any = {
    nomComplet,
    adress: addresse,
    telephone,
    founction: fonction,
    numeroLicence,
    isActive: false,
  };
  try {
    await addEquipage(newEquipage);
    revalidatePath("/admin/Pilotes");
  } catch (error) {
    console.error("Failed to add equipage:", error);
  }
};
