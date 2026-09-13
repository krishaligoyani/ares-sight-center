export type Severity = "Critical" | "High" | "Medium" | "Low";

export type Alert = {
  id: string;
  title: string;
  severity: Severity;
  source: string;
  score: number;
  correlation: "Correlated" | "Partial" | "Uncorrelated";
  status: "Uninvestigated" | "Investigating" | "Contained" | "False Positive";
  time: string;
  incident: string;
  analyst: string;
};

export const alerts: Alert[] = [
  { id: "ALT-29481", title: "Credential abuse followed by lateral execution", severity: "Critical", source: "SIEM", score: 98, correlation: "Correlated", status: "Investigating", time: "09:14:22Z", incident: "INC-0047", analyst: "M. Chen" },
  { id: "ALT-29476", title: "C2 beacon to newly registered domain", severity: "Critical", source: "Network Sensors", score: 96, correlation: "Correlated", status: "Uninvestigated", time: "09:07:11Z", incident: "INC-0049", analyst: "Unassigned" },
  { id: "ALT-29468", title: "PowerShell encoded command execution", severity: "High", source: "Auth", score: 89, correlation: "Partial", status: "Investigating", time: "08:52:03Z", incident: "INC-0047", analyst: "J. Rivera" },
  { id: "ALT-29461", title: "Satellite telemetry access anomaly", severity: "High", source: "Satellite", score: 86, correlation: "Correlated", status: "Contained", time: "08:39:45Z", incident: "INC-0051", analyst: "S. Okafor" },
  { id: "ALT-29455", title: "Known malware SHA-256 observed", severity: "High", source: "Threat Intel", score: 83, correlation: "Correlated", status: "Investigating", time: "08:22:17Z", incident: "INC-0052", analyst: "M. Chen" },
  { id: "ALT-29442", title: "Unusual outbound traffic volume", severity: "Medium", source: "Network Sensors", score: 72, correlation: "Partial", status: "Uninvestigated", time: "07:58:41Z", incident: "INC-0047", analyst: "Unassigned" },
  { id: "ALT-29431", title: "Multiple failed privileged logins", severity: "Medium", source: "Auth", score: 67, correlation: "Uncorrelated", status: "Uninvestigated", time: "07:41:09Z", incident: "INC-0054", analyst: "Unassigned" },
  { id: "ALT-29420", title: "Suspicious archive staging", severity: "Medium", source: "SIEM", score: 64, correlation: "Partial", status: "Investigating", time: "07:22:36Z", incident: "INC-0055", analyst: "J. Rivera" },
  { id: "ALT-29402", title: "Anonymous proxy authentication", severity: "Low", source: "Auth", score: 41, correlation: "Uncorrelated", status: "False Positive", time: "06:55:14Z", incident: "INC-0058", analyst: "S. Okafor" },
  { id: "ALT-29387", title: "DNS query entropy threshold exceeded", severity: "Low", source: "Network Sensors", score: 37, correlation: "Uncorrelated", status: "Uninvestigated", time: "06:31:48Z", incident: "INC-0060", analyst: "Unassigned" },
];

type Incident = { id: string; name: string; title: string; severity: Severity; score: number; confidence: number; assets: number; status: string; analyst: string };

export const incidents = [
  { id: "INC-0047", name: "OP NIGHTFALL", title: "Coordinated credential compromise", severity: "Critical" as Severity, score: 97, confidence: 94, assets: 7, status: "Active", analyst: "M. Chen" },
  { id: "INC-0049", name: "OP SILENT WIRE", title: "Command-and-control infrastructure", severity: "Critical" as Severity, score: 95, confidence: 91, assets: 4, status: "Escalated", analyst: "J. Rivera" },
  { id: "INC-0051", name: "OP ORBITAL LOCK", title: "Satellite telemetry access anomaly", severity: "High" as Severity, score: 86, confidence: 82, assets: 3, status: "In Review", analyst: "S. Okafor" },
] satisfies [Incident, ...Incident[]];

export const sourceHealth = [
  { name: "SIEM", status: "Operational", events: "8.42M", sync: "12 sec ago", format: "Syslog", quality: 99 },
  { name: "Network Sensors", status: "Operational", events: "4.18M", sync: "8 sec ago", format: "PCAP", quality: 98 },
  { name: "Authentication Logs", status: "Degraded", events: "1.76M", sync: "3 min ago", format: "JSON", quality: 82 },
  { name: "Satellite Intelligence Feed", status: "Operational", events: "284K", sync: "24 sec ago", format: "STIX/TAXII", quality: 97 },
  { name: "Threat Intelligence Reports", status: "Operational", events: "91K", sync: "1 min ago", format: "STIX 2.1", quality: 95 },
];

export const techniques = [
  { tactic: "Initial Access", id: "T1078", name: "Valid Accounts", state: "confirmed", confidence: 96, incident: "INC-0047" },
  { tactic: "Initial Access", id: "T1566.002", name: "Spearphishing Link", state: "suspected", confidence: 68, incident: "INC-0049" },
  { tactic: "Execution", id: "T1059.001", name: "PowerShell", state: "confirmed", confidence: 94, incident: "INC-0047" },
  { tactic: "Execution", id: "T1204.002", name: "Malicious File", state: "suspected", confidence: 71, incident: "INC-0051" },
  { tactic: "Persistence", id: "T1053.005", name: "Scheduled Task", state: "suspected", confidence: 66, incident: "INC-0049" },
  { tactic: "Privilege Escalation", id: "T1068", name: "Exploitation for Privilege Escalation", state: "suspected", confidence: 63, incident: "INC-0047" },
  { tactic: "Credential Access", id: "T1003.001", name: "LSASS Memory", state: "confirmed", confidence: 89, incident: "INC-0047" },
  { tactic: "Discovery", id: "T1087.002", name: "Domain Account", state: "confirmed", confidence: 87, incident: "INC-0047" },
  { tactic: "Command & Control", id: "T1071.001", name: "Web Protocols", state: "confirmed", confidence: 92, incident: "INC-0049" },
  { tactic: "Exfiltration", id: "T1041", name: "Exfiltration Over C2", state: "suspected", confidence: 74, incident: "INC-0047" },
];