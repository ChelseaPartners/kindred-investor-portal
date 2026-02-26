import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminNav />
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
