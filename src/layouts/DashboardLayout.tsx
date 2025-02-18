import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <SidebarProvider className="block lg:flex">
        {" "}
        {/* Wrap the entire layout */}
        <div className="flex flex-1">
          {/* Sidebar - Visible on large screens */}
          <div className="">
            <AppSidebar />
          </div>

          <main className="w-full">
            {/* Sidebar Trigger for Mobile */}
            <SidebarTrigger className="text-white  !hover:bg-none pt-1 pl-1"></SidebarTrigger>

            {/* Main Content */}
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
