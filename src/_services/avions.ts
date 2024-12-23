"use server";
import { Avion } from "@/interfaces/interfaces";
import { supabase } from "@/lib/supabase";
import { globalEndpoint } from "./login";

export const getAvionsComplet = async (token: string) => {
  const response = await fetch(`${globalEndpoint}/avion/getAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.text();
  return data;
  // const { data, error } = await supabase.from("avion").select(`*`);

  // if (error) {
  //   console.error("Error fetching avions tables:", error);
  //   return;
  // }

  // console.log("avions Tables:", data);
  // return data;
};
export const addAvion = async (newAvion: Avion) => {
  const { data, error } = await supabase.from("avion").insert(newAvion);

  if (error) {
    console.error("Error adding new avion:", error);
    return;
  }

  console.log("add new avion successfuly:", data);
};
