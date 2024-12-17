import React from "react";
import { Vol } from "../components/Vols";
import { supabase } from "@/lib/supabase";
type Props = {};
export default async function page({}: Props) {
  const { data } = await supabase.from("vol").select("*");
  // console.log(allVols);
  return (
    <div className="pt-5">
      <Vol data={data as any} />
    </div>
  );
}
