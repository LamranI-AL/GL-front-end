"use server";
import { Equipage } from "@/interfaces/interfaces";
import { supabase } from "@/lib/supabase";

export const getEquipageComplet = async () => {
  const { data, error } = await supabase.from("equipage").select(`*`);

  if (error) {
    console.error("Error fetching equipage tables:", error);
    return;
  }

  console.log("avions Tables:", data);
  return data;
};
export const addEquipage = async (newEquipage: Equipage) => {
  const { data, error } = await supabase.from("equipage").insert(newEquipage);

  if (error) {
    console.error("Error adding new equipage:", error);
    return;
  }

  console.log("add new equipage successfuly:", data);
};
