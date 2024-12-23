import React from "react";
import Dashboard from "./components/Dashboard";
import {
  countRows,
  getDynamicDestinationCounts,
  getTotalRevenue,
} from "@/_services/utils";

type Props = {};

export default async function page({}: Props) {
  const destinations = await getDynamicDestinationCounts();
  const viewCounter = await countRows("views");
  const equipageCounter = await countRows("equipage");
  const revenue = await getTotalRevenue();
  return (
    <div>
      <Dashboard
        viewCounter={viewCounter}
        equipageCounter={equipageCounter}
        revenue={revenue}
        destinations={destinations}
      />
    </div>
  );
}
