"use server";
import React from "react";
import Aeroport from "../components/Aeroport";
import { getAeroportComplet } from "@/_services/aeroport";

export default async function page() {
  const data = await getAeroportComplet();
  return (
    <div className="pl-72 pt-5">
      <Aeroport data={data as any} />
    </div>
  );
}
