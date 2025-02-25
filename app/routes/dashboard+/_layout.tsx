import { LoaderFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import { sessionStorage } from "~/auth/auth.server";
import { AppSidebar } from "~/components/app-sidebar";
import HeaderNav from "~/components/header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(
    request.headers.get("cookie")
  );
  const user = session.get("user");
  if (!user) throw redirect("/login");
  return null;
};

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderNav />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
