import { Outlet } from "@remix-run/react";

const DashboardLayout = () => {
  return (
    <div>
      
        <Outlet />
    </div>
  );
};

export default DashboardLayout;
