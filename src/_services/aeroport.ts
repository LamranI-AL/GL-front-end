"use server";
import { Airport } from "@/interfaces/interfaces";
import { supabase } from "@/lib/supabase";

export const getAeroportComplet = async () => {
  const { data, error } = await supabase.from("aeroport").select("*");

  if (error) {
    console.error("Error fetching related tables:", error);
    return;
  }

  console.log("Related Tables:", data);
  return data;
};
export const addAeroport = async (newAeroport: Airport) => {
  const { data, error } = await supabase.from("aeroport").insert(newAeroport);

  if (error) {
    console.error("Error adding new airoport:", error);
    return;
  }

  console.log("add new vol successfuly:", data);
};
