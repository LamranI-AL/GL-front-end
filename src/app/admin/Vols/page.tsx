import React from "react";
import { Vol } from "../components/Vols";
import { supabase } from "@/lib/supabase";
import { vol } from "@/interfaces/Interfaces";
import { AddVol } from "../components/AddVol";
type Props = {};
export default async function page({}: Props) {
  const { data } = await supabase.from("vol").select("*");
  // console.log(allVols);
  return (
    <div>
      <AddVol />
      <Vol data={data as any} />
    </div>
  );
}
