"use client";
import React from "react";
import { Line } from "react-chartjs-2";

const Charts: React.FC = () => {
  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Réservations Mensuelles",
        data: [50, 100, 150, 200, 180, 210],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#292940] p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Réservations Mensuelles</h4>
        {/* <Line data={monthlyData} /> */}
      </div>
    </div>
  );
};

export default Charts;
