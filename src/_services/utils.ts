"use server";
import { supabase } from "@/lib/supabase";

export const countRows = async (tableName: string): Promise<number> => {
  const { count, error } = await supabase
    .from(tableName)
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error(
      `Erreur lors du comptage des lignes pour ${tableName}:`,
      error.message
    );
    return 0;
  }

  return count || 0;
};
export const getTotalRevenue = async (): Promise<number> => {
  const { data, error } = await supabase
    .from("reservation")
    .select("prixTotale");

  if (error) {
    console.error(
      "Erreur lors de la récupération du revenu total:",
      error.message
    );
    return 0;
  }

  return data.reduce(
    (sum: number, item: { prixTotale: number }) => sum + item.prixTotale,
    0
  );
};
export const getDynamicDestinationCounts = async (): Promise<
  { destination: string; value: number }[]
> => {
  const { data, error } = await supabase
    .from("vol")
    .select("aeroportDestination");

  if (error) {
    console.error(
      "Erreur lors de la récupération des destinations:",
      error.message
    );
    return [];
  }

  // Étape 1: Compter les occurrences sous forme d'objet
  const counts = data.reduce((acc: Record<string, number>, row) => {
    const destination = row.aeroportDestination;
    acc[destination] = (acc[destination] || 0) + 1;
    return acc;
  }, {});

  // Étape 2: Convertir l'objet en tableau d'objets
  const result = Object.entries(counts).map(([key, value]) => ({
    destination: key,
    value: value,
  }));

  return result;
};
