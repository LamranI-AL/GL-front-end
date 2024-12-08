import React from "react";
import Pilotes from "../components/Pilotes";
import { supabase } from "@/lib/supabase";

type Props = {};

export default async function page({}: Props) {
  const { data } = await supabase.from("equipage").select("*");
  return <Pilotes data={data as any} />;
}
