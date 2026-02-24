import { FolderGit2, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const projects = [
  { id:"1", name:"Web Frontend", envs: ["Development", "Staging", "Production"], secrets: 42 },
  { id:"2", name:"Payment Worker", envs: ["Staging", "Production"], secrets: 15 },
  { id:"3", name:"Analytics Pipeline", envs: ["Production"], secrets: 8 }
];
export default function ProjectsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><FolderGit2 style={{color:"var(--color-accent-primary)"}}/> Projects</h1>
      <button className="btn btn-primary"><Plus size={16}/> New Project</button>
    </div>
    <div style={{display:"grid",gap:"var(--space-4)"}}>
      {projects.map(p=>(<div key={p.id} className="card" style={{padding:"var(--space-5)",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"transform 0.2s",cursor:"pointer"}} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
        <div>
          <h3 style={{fontSize:"var(--font-size-lg)",fontWeight:700,marginBottom:8}}>{p.name}</h3>
          <div style={{display:"flex",gap:"var(--space-2)"}}>
            {p.envs.map(e=><span key={e} className="badge badge-violet">{e}</span>)}
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-6)"}}>
          <div style={{textAlign:"right"}}><span style={{fontSize:"24px",fontWeight:700}}>{p.secrets}</span><span style={{display:"block",fontSize:"11px",color:"var(--color-text-secondary)",textTransform:"uppercase",fontWeight:600}}>Secrets</span></div>
          <Link to="/secrets" className="btn btn-ghost" style={{padding:8}}><ArrowRight size={20}/></Link>
        </div>
      </div>))}
    </div>
  </div>);
}
