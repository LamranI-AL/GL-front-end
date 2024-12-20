import React from "react";
import Voyage from "./_components/voyage";
import { getVolsComplet } from "@/_services/Vols";
import { vol } from "@/interfaces/Interfaces";

export default async function page() {
  const vols: vol[] | any = await getVolsComplet();
  return <Voyage vols={vols} />;
}
