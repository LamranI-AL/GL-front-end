"use server";
import React from "react";
import Avion from "../components/Avion";
import { supabase } from "@/lib/supabase";
import { AddAvionForm } from "../components/addAvion";

async function page() {
  const { data } = await supabase.from("avion").select("*");
  console.log(data);
  return (
    <div className="pl-72 pt-5">
      {/* <AddAvionForm /> */}
      <Avion data={data as any} />
    </div>
  );
}

export default page;
