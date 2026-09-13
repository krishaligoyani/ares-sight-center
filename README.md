# ARES Command Center

Build the "ARES — Threat Intelligence Command Center" frontend prototype for cyber threat intelligence correlation and alert prioritization. 

Design & Theme:
- Dark navy enterprise SOC command-center aesthetic (deep navy backgrounds, slate/navy panels, subtle borders, Inter/IBM Plex Sans with IBM Plex Mono for technical identifiers/hashes/IPs).
- Severity accents: Critical (red), High (orange), Medium (amber), Low (blue/teal). Clear 'DEMO DATA' badge in top bar.
- No flashy neon or decorative gamer effects; clean, dense, crisp enterprise security layout.

Main Layout:
- Fixed sidebar: Command Dashboard, Alert Intelligence, Investigations, MITRE ATT&CK, Intelligence Sources, Commander BLUF Reports, Settings.
- Top bar: ARES logo and shield mark, current page title, global search bar, notification center, operational status indicator, analyst profile avatar, and persistent DEMO DATA indicator.

Pages & Core Functionality:
1. Command Dashboard:
   - Metric cards: Total Alerts (12,846), Critical Threats (24), Correlated Incidents (186), False Positives (8,421), Uninvestigated Alerts (63).
   - Charts (Recharts): Alert volume over time timeline, severity breakdown, alert distribution by source (SIEM, Network Sensors, Auth, Satellite, Threat Intel), correlation success rate.
   - Tables & interactive panels: Critical incidents table, recent intelligence feed, intelligence source health status, top prioritized alerts.

2. Alert Intelligence:
   - Full alert registry with search, multi-factor filtering (severity, source, status, correlation state), sorting by risk score, pagination.
   - Actions per alert: select, open related investigation directly, mark as false positive, assign analyst.
   - Rich columns: Alert ID, Title, Severity, Source, Risk Score (0-100 gauge/badge), Correlation Status, Timestamp, Action menu.

3. Investigations Workspace:
   - Incident selection switcher and detailed incident view.
   - Interactive correlation graph / visual node chain (e.g. Suspicious Login -> PowerShell Execution -> Malware Download -> Unusual Outbound Traffic).
   - Tabbed panels: Event Timeline with timestamps, Evidence artifact inspector (hashes, IP addresses, hostnames), Threat Assessment panel with correlation confidence.
   - Analyst workflow: update investigation status (Active, In Review, Closed, Escalated), assign analyst, and add timestamped analyst notes.

4. MITRE ATT&CK Matrix:
   - Interactive tactic matrix covering Initial Access, Execution, Persistence, Privilege Escalation, Credential Access, Discovery, Command & Control, Exfiltration.
   - Clear visual differentiation between suspected techniques and confirmed findings.
   - Technique modal/drawer showing Technique ID (e.g. T1059.001, T1078, T1041), Tactic, Confidence, Supporting alert traces, and mapped incidents.

5. Intelligence Sources:
   - Monitoring grid: SIEM, Network Sensors, Authentication Logs, Satellite Intelligence Feed, Threat Intelligence Reports.
   - Metrics per source: Connection status, events processed, last sync time, format (STIX/TAXII, Syslog, JSON, PCAP), health status.
   - Demo file upload area for sample intelligence files (JSON, STIX, PCAP) with simulated parsing.

6. Commander BLUF Reports:
   - Incident selector dropdown populating structured Bottom Line Up Front report templates.
   - Structured sections: Bottom Line Up Front, Current Assessment (Risk Score, Confidence, Affected Assets count), Key Findings bullet list, Affected Assets list, Supporting Evidence table, MITRE ATT&CK Mapping, and Actionable Recommended Countermeasures.
   - Interactive actions: Generate BLUF, Copy formatted markdown/text to clipboard, Export Report (PDF/Print view), Jump to Evidence.

Ensure realistic interconnected cross-navigation: selecting an alert can jump to its investigation, investigations link to their MITRE techniques and allow one-click BLUF report generation for that incident. Include toast notifications for analyst actions.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ares-sight-center.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0402a5a4-1d83-41a3-8cfe-2b5f55c13de0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
