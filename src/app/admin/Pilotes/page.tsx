import React from "react";
import Pilotes from "../components/Pilotes";
import { getEquipageComplet } from "@/_services/equipage";

type Props = {};

export default async function page({}: Props) {
  const data = await getEquipageComplet();
  return <Pilotes data={data as any} />;
}
