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
  const newVol = {
    codeIATA: IATAvion,
    numVol: volNum,
    aeroportOrigin: Origine,
    aeroportDestination: Destination,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };
  try {
    console.log("good");
    const { error } = await supabase.from("vol").insert(newVol);
    revalidatePath("/admin/Vols");
    if (error) {
      throw new Error("error is " + error);
    }
  } catch (error) {
    console.log(error);
  }
};
