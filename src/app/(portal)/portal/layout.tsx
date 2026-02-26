import { PortalSidebar } from "@/components/portal/portal-sidebar";
import { PortalNav } from "@/components/portal/portal-nav";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PortalSidebar />
      <div className="lg:pl-64">
        <PortalNav />
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
