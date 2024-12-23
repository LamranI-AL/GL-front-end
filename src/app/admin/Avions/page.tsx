"use server";
import React from "react";
import Avion from "../components/Avion";
import { getAvionsComplet } from "@/_services/avions";

export default async function page() {
  const data = await getAvionsComplet();
  console.log(data);
  return (
    <div className="pl-72 pt-5">
      <Avion data={data as any} />
    </div>
  );
}
