import { useState } from "react";
import { KeyRound, Plus, Copy, Eye, EyeOff, Search } from "lucide-react";
import { Button, Card, Badge, Input } from "@geenius-ui/react-css";

const secrets = [
    { id: "1", key: "DATABASE_URL", val: "postgresql://user:pass@db.openclaw.dev/main", updated: "2 days ago", updatedBy: "mehdi@openclaw.dev" },
    { id: "2", key: "NEXT_PUBLIC_API_URL", val: "https://api.openclaw.dev", updated: "2 weeks ago", updatedBy: "system" },
    { id: "3", key: "STRIPE_SECRET_KEY", val: "sk_live_51Mxxxxxxxxxxxxxxxxxx", updated: "1 month ago", updatedBy: "mehdi@openclaw.dev" },
    { id: "4", key: "OPENAI_API_KEY", val: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", updated: "3 months ago", updatedBy: "john@openclaw.dev" }
];

export default function SecretsPage() {
    const [show, setShow] = useState(false);

    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: 4 }}><KeyRound style={{ color: "var(--color-accent-primary)" }} /> Secrets</h1>
                <p style={{ color: "var(--color-text-secondary)" }}>Production API</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
                <Button variant="outline" icon={show ? <EyeOff size={16} /> : <Eye size={16} />} onClick={() => setShow(!show)}>
                    {show ? "Hide Values" : "Reveal Values"}
                </Button>
                <Button variant="primary" icon={<Plus size={16} />}>Add Secret</Button>
            </div>
        </div>

        <Card padding="none">
            <div style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "var(--space-2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flex: 1 }}>
                    <Search size={16} style={{ color: "var(--color-text-tertiary)" }} />
                    <Input type="text" placeholder="Search secrets..." style={{ width: "100%" }} />
                </div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Key</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Value</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Updated</th>
                        <th style={{ width: 60 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {secrets.map(s => (<tr key={s.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <td style={{ padding: "12px 16px" }}><span className="mono" style={{ fontWeight: 600 }}>{s.key}</span></td>
                        <td style={{ padding: "12px 16px" }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: show ? "var(--color-text-primary)" : "var(--color-text-tertiary)", background: "var(--color-bg-secondary)", padding: "4px 8px", borderRadius: 4, display: "inline-block" }}>
                                {show ? s.val : "••••••••••••••••••••••••"}
                            </div>
                        </td>
                        <td style={{ padding: "12px 16px", fontSize: "13px", color: "var(--color-text-secondary)" }}>
                            {s.updated} by {s.updatedBy}
                        </td>
                        <td style={{ padding: "12px 16px", textAlign: "right" }}>
                            <Button variant="ghost" size="sm" style={{ padding: 6 }} icon={<Copy size={16} />} />
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </Card>

        <div className="card" style={{ marginTop: "var(--space-6)", padding: "var(--space-5)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase" }}>Environment Variables</h3>
                <Button variant="ghost" size="sm" icon={<Plus size={14} />}>Add Secret</Button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {secrets.map((s, i) => (<div key={i} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                    <div style={{ flex: 1 }}><Input type="text" className="mono" defaultValue={s.key} style={{ fontWeight: 600 }} /></div>
                    <div style={{ fontSize: "14px", color: "var(--color-text-tertiary)" }}>=</div>
                    <div style={{ flex: 2, position: "relative" }}>
                        <Input type={show ? "text" : "password"} className="mono" defaultValue={s.val} />
                    </div>
                    <Button variant="ghost" size="sm" style={{ padding: 8 }} icon={<Copy size={16} />} />
                </div>))}
            </div>
        </div>
    </div>);
}
