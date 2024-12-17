import React, { Suspense } from "react";
import Loading from "../loading";
import { ToggleSideBarWrapper } from "./toggleSidebar";
import Sidebar from "./components/Sidebar";

type Props = {};

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ToggleSideBarWrapper>
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 ">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </ToggleSideBarWrapper>
  );
}

export default AdminLayout;
