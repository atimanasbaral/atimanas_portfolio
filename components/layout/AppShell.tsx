import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import MobileNav from "@/components/layout/MobileNav";
import PageTransition from "@/components/animation/PageTransition";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <Sidebar />
      <div className="flex min-h-screen flex-col md:ml-sidebar">
        <TopNav />
        <PageTransition>
          <div className="main-content flex-1 pb-20 md:pb-0">{children}</div>
        </PageTransition>
      </div>
      <MobileNav />
    </div>
  );
}
