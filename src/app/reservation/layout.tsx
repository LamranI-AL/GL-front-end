import React, { Suspense } from "react";
import Loading from "../loading";
import Header from "@/components/homePageCom/Header";
import { BreadcrumbDemo } from "./_components/breadCrum";
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
      <div className="flex ">
        {/* <Sidebar /> */}
        <div className="flex-1 ">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
