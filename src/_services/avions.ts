import { Avion } from "@/interfaces/Interfaces";
import { supabase } from "@/lib/supabase";

export const getAvionsComplet = async () => {
  const { data, error } = await supabase.from("avion").select(`*`);

  if (error) {
    console.error("Error fetching avions tables:", error);
    return;
  }

  console.log("avions Tables:", data);
};
export const addAvion = async (newAvion: Avion) => {
  const { data, error } = await supabase.from("avion").insert(newAvion);

  if (error) {
    console.error("Error adding new avion:", error);
    return;
  }

  console.log("add new avion successfuly:", data);
};
