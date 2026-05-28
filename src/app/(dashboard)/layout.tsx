import { SideNavBar } from "@/components/shared/SideNavBar";
import { DashboardHeader } from "@/components/shared/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <SideNavBar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
