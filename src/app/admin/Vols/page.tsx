import React from "react";
import { Vol } from "../components/Vols";
import { getVolsComplet } from "@/_services/Vols";
type Props = {};
export default async function page({}: Props) {
  const data = await getVolsComplet();
  return (
    <div className="pt-5">
      <Vol data={data as any} />
    </div>
  );
}
