import { Airport, vol } from "@/interfaces/Interfaces";
import { supabase } from "@/lib/supabase";

export const getVolsComplet = async () => {
  const { data, error } = await supabase.from("vol").select(`
      *
    `);

  if (error) {
    console.error("Error fetching related tables:", error);
    return;
  }

  console.log("Related Tables:", data);
};
export const addVol = async (newVol: Airport) => {
  const { data, error } = await supabase.from("vol").insert(newVol);

  if (error) {
    console.error("Error adding new airoport:", error);
    return;
  }

  console.log("add new vol successfuly:", data);
};
