import React, { Suspense } from "react";
import Loading from "../loading";
import Header from "@/components/homePageCom/Header";
import { BreadcrumbDemo } from "./_components/breadCrum";
import Panier from "./_components/panier";
// import { ToggleSideBarWrapper } from "./toggleSidebar";
// import Sidebar from "./components/Sidebar";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Header /> */}
      <BreadcrumbDemo />
      {/* <Sidebar /> */}
      <div className="flex mt-5" style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
        <div style={{ flex: 1 }}>
          <Panier />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
