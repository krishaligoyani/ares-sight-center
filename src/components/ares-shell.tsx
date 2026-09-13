import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Bell,
  BrainCircuit,
  ChevronLeft,
  FileText,
  LayoutDashboard,
  Menu,
  Radar,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Command Dashboard", icon: LayoutDashboard },
  { to: "/alerts", label: "Alert Intelligence", icon: Siren },
  { to: "/investigations", label: "Investigations", icon: BrainCircuit },
  { to: "/mitre", label: "MITRE ATT&CK", icon: ShieldCheck },
  { to: "/sources", label: "Intelligence Sources", icon: Radar },
  { to: "/reports", label: "Commander BLUF Reports", icon: FileText },
] as const;

const pageTitles: Record<string, string> = {
  "/": "Command Dashboard",
  "/alerts": "Alert Intelligence",
  "/investigations": "Investigations Workspace",
  "/mitre": "MITRE ATT&CK Matrix",
  "/sources": "Intelligence Sources",
  "/reports": "Commander BLUF Reports",
  "/settings": "Settings",
};

export function AresShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const title = pageTitles[path] ?? "ARES";

  return (
    <TooltipProvider delayDuration={150}>
      <div className="min-h-screen bg-background text-foreground">
        {mobileOpen && (
          <button aria-label="Close navigation" className="fixed inset-0 z-40 bg-overlay lg:hidden" onClick={() => setMobileOpen(false)} />
        )}
        <aside className={cn("fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-sidebar transition-[width,transform] duration-200", collapsed ? "w-17" : "w-64", mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0")}>
          <div className="flex h-16 items-center border-b border-border px-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary"><Shield className="h-5 w-5" /></div>
            {!collapsed && <div className="ml-3"><div className="text-lg font-bold tracking-[0.18em]">ARES</div><div className="text-[10px] uppercase text-muted-foreground">Threat Intelligence</div></div>}
            <Button variant="ghost" size="icon" className="ml-auto lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></Button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-5" aria-label="Primary navigation">
            {!collapsed && <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Command modules</p>}
            {navItems.map((item) => {
              const active = path === item.to;
              const Icon = item.icon;
              return (
                <Tooltip key={item.to}>
                  <TooltipTrigger asChild>
                    <Link to={item.to} onClick={() => setMobileOpen(false)} className={cn("flex h-10 items-center gap-3 border-l-2 px-3 text-sm transition-colors", active ? "border-primary bg-sidebar-accent text-sidebar-primary-foreground" : "border-transparent text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground")}>
                      <Icon className="h-4 w-4 shrink-0" /><span className={cn(collapsed && "lg:hidden")}>{item.label}</span>
                    </Link>
                  </TooltipTrigger>
                  {collapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
                </Tooltip>
              );
            })}
          </nav>
          <div className="border-t border-border p-2">
            <Link to="/settings" className={cn("flex h-10 items-center gap-3 border-l-2 px-3 text-sm", path === "/settings" ? "border-primary bg-sidebar-accent" : "border-transparent text-muted-foreground")}><Settings className="h-4 w-4" /><span className={cn(collapsed && "lg:hidden")}>Settings</span></Link>
            <Button variant="ghost" size="icon" className="mt-2 hidden lg:inline-flex" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}><ChevronLeft className={cn("transition-transform", collapsed && "rotate-180")} /></Button>
          </div>
        </aside>

        <div className={cn("transition-[padding] duration-200", collapsed ? "lg:pl-17" : "lg:pl-64")}>
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur md:px-6">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></Button>
            <div className="min-w-0"><p className="truncate text-sm font-semibold md:text-base">{title}</p><p className="hidden text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:block">Unified operational picture</p></div>
            <div className="relative ml-auto hidden w-full max-w-sm md:block"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="h-9 bg-panel pl-9 font-mono text-xs" placeholder="Search alerts, IPs, hashes, incidents..." /></div>
            <span className="hidden items-center gap-2 text-xs text-success sm:flex"><span className="h-2 w-2 animate-pulse rounded-full bg-success" />Operational</span>
            <span className="border border-warning/40 bg-warning/10 px-2 py-1 text-[10px] font-bold tracking-[0.14em] text-warning">DEMO DATA</span>
            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-critical" /></Button>
            <div className="hidden items-center gap-2 border-l border-border pl-3 xl:flex"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">MC</div><div><p className="text-xs font-semibold">Maya Chen</p><p className="text-[10px] text-muted-foreground">Senior Analyst</p></div></div>
          </header>
          <main className="min-h-[calc(100vh-4rem)] p-4 md:p-6">{children}</main>
        </div>
        <Toaster richColors position="bottom-right" />
      </div>
    </TooltipProvider>
  );
}