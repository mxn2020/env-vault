import { History } from "lucide-react";
const logs = [
  { id:"1", action:"Accessed secret OPENAI_API_KEY", project:"Web Frontend", user:"mehdi@openclaw.dev", time:"10 mins ago" },
  { id:"2", action:"Updated secret DATABASE_URL", project:"Payment Worker", user:"ci-bot", time:"2 hours ago" },
  { id:"3", action:"Created environment Production", project:"Analytics Pipeline", user:"john@openclaw.dev", time:"Yesterday" }
];
export default function AuditTrailPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><History style={{color:"var(--color-accent-primary)"}}/> Audit Trail</h1>
    <div className="card">
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead>
          <tr style={{borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-secondary)"}}>
            <th style={{textAlign:"left",padding:"16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Action</th>
            <th style={{textAlign:"left",padding:"16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Project</th>
            <th style={{textAlign:"left",padding:"16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Actor</th>
            <th style={{textAlign:"right",padding:"16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log=>(<tr key={log.id} style={{borderBottom:"1px solid var(--color-border)"}}>
            <td style={{padding:"16px",fontSize:"14px",fontWeight:600}}>{log.action}</td>
            <td style={{padding:"16px",fontSize:"14px",color:"var(--color-text-secondary)"}}>{log.project}</td>
            <td style={{padding:"16px",fontSize:"14px",color:"var(--color-text-secondary)"}}>{log.user}</td>
            <td style={{padding:"16px",fontSize:"13px",color:"var(--color-text-tertiary)",textAlign:"right"}}>{log.time}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>);
}
