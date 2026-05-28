"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Badge } from "../ui/Badge";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
    badge: undefined,
  },
  {
    label: "My Conversions",
    href: "/dashboard/conversions",
    icon: FileText,
    badge: "12",
  },
  {
    label: "Storage",
    href: "/dashboard/storage",
    icon: FileText,
    badge: undefined,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    badge: undefined,
  },
  {
    label: "Help & Docs",
    href: "/dashboard/help",
    icon: HelpCircle,
    badge: undefined,
  },
];

export const SideNavBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/10 bg-gradient-to-b from-surface/95 to-surface/80 backdrop-blur-xl min-h-screen flex flex-col sticky top-0">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-neon-gradient flex items-center justify-center text-surface font-bold">
            Q
          </div>
          <div>
            <p className="text-sm font-bold text-white">QuickConvert</p>
            <p className="text-xs text-on-surface-variant">Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 group",
                isActive
                  ? "bg-primary/20 text-primary shadow-neon-glow-sm"
                  : "text-on-surface-variant hover:text-primary hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.badge && (
                <Badge variant={isActive ? "primary" : "ghost"}>
                  {item.badge}
                </Badge>
              )}
              {!item.badge && (
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-white/10 space-y-3">
        <div className="px-4 py-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider">
            Storage
          </p>
          <p className="text-sm font-bold text-white mt-1">2.4 GB / 10 GB</p>
          <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
            <div className="h-full w-1/4 bg-neon-gradient" />
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-error hover:bg-error/10 transition-all duration-300">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};