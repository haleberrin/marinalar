import { auth } from "@/auth";
import { redirect } from "next/navigation";

import AdminSidebar from "@/app/components/admin/AdminSidebar";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <AdminSidebar
        name={session.user.name}
        email={session.user.email}
      />

      <main className="min-h-screen lg:pl-72">
        <div className="px-6 py-8 lg:px-10">
          {children}
        </div>
      </main>
    </div>
  );
}