import React from "react";
import Voyage from "./_components/voyage";
// import { Separator } from "@/components/ui/separator";
import Identification from "./_components/identification";
import { getVolsComplet } from "@/_services/Vols";
// import Header from "@/components/homePageCom/Header";
import { vol } from "@/interfaces/Interfaces";

export default async function page() {
  const vols: vol[] | any = await getVolsComplet();
  console.log("vol", vols);
  return (
    <div>
      <Voyage vols={vols} />
      <Identification />
    </div>
  );
}
