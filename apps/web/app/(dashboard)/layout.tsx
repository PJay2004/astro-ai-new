import { DashboardLayout } from "@/modules/dashboard/ui/layouts/dashboad-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
