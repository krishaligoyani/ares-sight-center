# ARES Threat Intelligence Command Center

## Build scope
- Replace the blank starter with a dense, dark enterprise SOC interface using a fixed navigation rail and persistent command bar.
- Add six connected pages: Command Dashboard, Alert Intelligence, Investigations, MITRE ATT&CK, Intelligence Sources, and Commander BLUF Reports.
- Use realistic demo intelligence throughout, with a prominent persistent `DEMO DATA` label.

## Shared experience
- Create reusable severity, risk, status, metric, table, and panel patterns with IBM Plex Sans and IBM Plex Mono.
- Add global search, notifications, operational status, analyst identity, mobile navigation, and route-aware page titles.
- Preserve cross-navigation: alerts open investigations, investigations open mapped techniques, and incidents flow into BLUF reports.
- Add toast confirmations for analyst actions such as assignment, false-positive marking, status changes, notes, uploads, and report generation.

## Page behavior
- **Command Dashboard:** five headline metrics, four compact charts, critical incidents, prioritized alerts, intelligence feed, and source health.
- **Alert Intelligence:** searchable and sortable registry with severity/source/status/correlation filters, selection, assignment, false-positive actions, investigation links, and pagination.
- **Investigations:** incident switcher, correlation node chain, timeline/evidence/assessment tabs, status and analyst controls, notes, MITRE links, and BLUF generation.
- **MITRE ATT&CK:** eight-tactic technique matrix with suspected/confirmed states and a detailed technique dialog linked to incidents.
- **Intelligence Sources:** health grid with throughput, sync and format details plus simulated JSON/STIX/PCAP upload parsing.
- **Commander BLUF:** incident-populated report with assessment, findings, assets, evidence, ATT&CK mapping, recommendations, copy, print/PDF, and evidence jump actions.

## Technical approach
- Use TanStack file routes for every page and TanStack links for navigation.
- Use existing shadcn controls, Lucide icons, Recharts, and Sonner.
- Keep all data and interactions frontend-only as a prototype; state resets on refresh.
- Define all visual roles as semantic tokens in the global stylesheet and include distinct metadata per route.
- Validate route rendering and key interactions at desktop and mobile widths.
