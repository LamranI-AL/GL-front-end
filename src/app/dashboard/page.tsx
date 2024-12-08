import Charts from "@/components/Charts";
import DashboardHeader from "@/components/DashboardHeader";
import RecentReservations from "@/components/RecentReservations";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#1e1e2f] text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <DashboardHeader />
        <RecentReservations />
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
