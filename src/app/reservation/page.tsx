import React from "react";
import Voyage from "./_components/voyage";
import { Separator } from "@/components/ui/separator";
import Identification from "./_components/identification";

function page() {
  return (
    <div>
      <Voyage />
      <Separator />
      <Identification />
    </div>
  );
}

export default page;
