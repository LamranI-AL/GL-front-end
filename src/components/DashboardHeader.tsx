// "use server";
import { supabase } from "@/lib/supabase";
import React from "react";

const DashboardHeader: React.FC = async () => {
  const equipages = await supabase.from("equipage").select("*");
  console.log("hey");
  console.log(equipages.data?.length);
  const stats = [
    { title: "Réservations Totales", value: 1234, percentage: "+15%" },
    { title: "Vols Actifs", value: 42, percentage: "+8%" },
    { title: "Membres d'Équipage", value: 156, percentage: "+5%" },
    { title: "Taux d'Occupation", value: "85%", percentage: "+12%" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#292940] p-4 rounded-lg text-center shadow-md"
        >
          <h4 className="text-lg font-medium">{stat.title}</h4>
          <p className="text-2xl font-bold my-2">{stat.value}</p>
          <span className="text-green-500">{stat.percentage}</span>
        </div>
      ))}
    </div>
  );
};

export default DashboardHeader;
