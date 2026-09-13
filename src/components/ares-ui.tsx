import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Severity } from "@/lib/ares-data";

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: ReactNode }) {
  return <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end"><div><p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p><h1 className="text-2xl font-semibold">{title}</h1><p className="mt-1 max-w-3xl text-sm text-muted-foreground">{description}</p></div>{actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}</div>;
}

export function Panel({ title, subtitle, action, children, className }: { title: string; subtitle?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return <section className={cn("border border-border bg-panel", className)}><div className="flex min-h-12 items-center justify-between border-b border-border px-4 py-2"><div><h2 className="text-sm font-semibold">{title}</h2>{subtitle && <p className="text-[11px] text-muted-foreground">{subtitle}</p>}</div>{action}</div><div className="p-4">{children}</div></section>;
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  return <span className={cn("inline-flex min-w-16 items-center justify-center border px-2 py-1 text-[10px] font-bold uppercase", severity === "Critical" && "border-critical/40 bg-critical/10 text-critical", severity === "High" && "border-high/40 bg-high/10 text-high", severity === "Medium" && "border-warning/40 bg-warning/10 text-warning", severity === "Low" && "border-info/40 bg-info/10 text-info")}>{severity}</span>;
}

export function RiskScore({ score }: { score: number }) {
  return <div className="flex items-center gap-2"><div className="h-1.5 w-14 overflow-hidden bg-muted"><div className={cn("h-full", score >= 90 ? "bg-critical" : score >= 75 ? "bg-high" : score >= 55 ? "bg-warning" : "bg-info")} style={{ width: `${score}%` }} /></div><span className="font-mono text-xs font-semibold">{score}</span></div>;
}

export function StatusDot({ status }: { status: string }) {
  const bad = status === "Degraded" || status === "Escalated";
  return <span className={cn("inline-flex items-center gap-1.5 text-xs", bad ? "text-warning" : "text-success")}><span className={cn("h-1.5 w-1.5 rounded-full", bad ? "bg-warning" : "bg-success")} />{status}</span>;
}