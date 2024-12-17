"use server";
import React from "react";
import Aeroport from "../components/Aeroport";
import { AddAirportForm } from "../components/AddAeroport";
import { supabase } from "@/lib/supabase";

async function page() {
  const { data } = await supabase.from("aeroport").select("*");
  console.log(data);
  return (
    <div className="pl-72 pt-5">
      {/* <AddAirportForm /> */}
      <Aeroport data={data as any} />
    </div>
  );
}

export default page;
