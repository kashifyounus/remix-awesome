// app/routes/dashboard.tsx
import { Outlet } from "@remix-run/react";

export default function DashboardLayoutForSettings() {
  return (
    <div>
      <header>Dashboard Header For Settings</header>
      <main>
        <Outlet />  {/* This will render index.tsx or settings.tsx */}
      </main>
    </div>
  );
}
