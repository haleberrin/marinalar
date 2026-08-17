"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import {
  Anchor,
  CalendarDays,
  FileText,
  LayoutDashboard,
  LogOut,
  Tags,
} from "lucide-react";

interface AdminSidebarProps {
  name?: string | null;
  email?: string | null;
}

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Marinalar",
    href: "/admin/marinas",
    icon: Anchor,
  },
  {
    label: "Etkinlikler",
    href: "/admin/events",
    icon: CalendarDays,
  },
  {
    label: "Bloglar",
    href: "/admin/blogs",
    icon: FileText,
  },
  {
    label: "Kategoriler",
    href: "/admin/categories",
    icon: Tags,
  },
];

export default function AdminSidebar({
  name,
  email,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed
        inset-y-0
        left-0
        z-50
        hidden
        w-72
        border-r
        border-white/10
        bg-darknavy
        text-white
        lg:flex
        lg:flex-col
      "
    >
      <div className="border-b border-white/10 px-7 py-7">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          Marina Network
        </p>

        <h2 className="mt-2 font-cormorant-garamont text-3xl font-bold">
          Yönetim Paneli
        </h2>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-6">
        {navigation.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  active
                    ? "bg-primary text-white shadow-lg"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <Icon size={19} />

              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-5">
        <div className="mb-4 rounded-2xl bg-white/5 p-4">
          <p className="font-semibold text-white">
            {name ?? "Admin"}
          </p>

          <p className="mt-1 truncate text-xs text-white/50">
            {email}
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            signOut({
              callbackUrl: "/admin/login",
            })
          }
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3
            text-sm
            font-semibold
            text-white/70
            transition
            hover:bg-red-500/10
            hover:text-red-300
          "
        >
          <LogOut size={18} />

          Çıkış Yap
        </button>
      </div>
    </aside>
  );
}