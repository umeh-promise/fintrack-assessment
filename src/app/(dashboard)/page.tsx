import { Metadata } from "next";
import DashboardLayout from "./_components/dashboard-layout";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return <DashboardLayout />;
}
