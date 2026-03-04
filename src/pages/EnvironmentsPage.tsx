import { Folder, Lock, Users } from "lucide-react";
import { Card, Badge } from "@geenius-ui/react-css";

const envs = [
    { id: "1", name: "Global Defaults", type: "global", secretCount: 15, accessCount: 12 },
    { id: "2", name: "Production API", type: "production", secretCount: 42, accessCount: 3 },
    { id: "3", name: "Staging API", type: "staging", secretCount: 40, accessCount: 12 },
    { id: "4", name: "Development API", type: "development", secretCount: 38, accessCount: 12 },
    { id: "5", name: "Edge Workers", type: "production", secretCount: 8, accessCount: 2 }
];

export default function EnvironmentsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Environments</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "var(--space-4)" }}>
            {envs.map(env => (<Card key={env.id} padding="md">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                    <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}><Folder size={18} style={{ color: "var(--color-accent-primary)" }} /> {env.name}</h3>
                    <Badge variant={env.type === "production" ? "error" : env.type === "staging" ? "warning" : "success"} style={{ textTransform: "uppercase" }}>{env.type}</Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--color-text-secondary)", paddingTop: "var(--space-3)", borderTop: "1px solid var(--color-border)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Lock size={14} /> {env.secretCount} secrets</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={14} /> {env.accessCount} members</span>
                </div>
            </Card>))}
        </div>
    </div>);
}
