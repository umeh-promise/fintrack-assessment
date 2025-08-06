import { Metadata } from "next";
import DashboardLayout from "./_components/dashboard-layout";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <Suspense fallback={<>Loading dashboard...</>}>
      <DashboardLayout />
    </Suspense>
  );
}
