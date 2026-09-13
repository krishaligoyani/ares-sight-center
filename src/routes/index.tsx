import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/ares-pages";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Command Dashboard — ARES" }, { name: "description", content: "ARES threat intelligence operational dashboard." }, { property: "og:title", content: "Command Dashboard — ARES" }, { property: "og:description", content: "Threat intelligence operational dashboard." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: DashboardPage,
});
