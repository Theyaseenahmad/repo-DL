import DashboardMiddleBox from "@/components/manual/DashboardMiddleBox";
import DashboardRightBox from "@/components/manual/DashboardRightBox";
import Navbar from "@/components/manual/Navbar";

import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4 w-full  border-b-2  lg:border-0">
          <SidebarTrigger className="-ml-1 lg:hidden " />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Navbar></Navbar>
        </div>
      </header>
      <div className="md:px-10 px-6 h-8 font-bold text-xl text-[#161E54] mt-4">
        <h2>Dashboard</h2>
      </div>

      <div className="w-full h-full flex flex-col md:flex-col gap-4 md:px-6 p-2 lg:flex-row">
        <DashboardMiddleBox />
        <DashboardRightBox />
      </div>
    </SidebarInset>
  );
}
