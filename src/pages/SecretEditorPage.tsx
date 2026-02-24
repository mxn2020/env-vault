import { KeyRound, Eye, EyeOff, Plus, Save, Copy } from "lucide-react";
import { useState } from "react";
const secrets = [
  { key:"DATABASE_URL", val:"postgres://user:pass@localhost:5432/db", env:"Production" },
  { key:"STRIPE_SECRET_KEY", val:"sk_test_123456789", env:"Production" },
  { key:"OPENAI_API_KEY", val:"sk-proj-xyz987", env:"Staging" }
];
export default function SecretEditorPage() {
  const [show, setShow] = useState(false);
  return (<div style={{padding:"var(--space-8)",maxWidth:1200}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-2)",color:"var(--color-text-secondary)",fontSize:"13px",marginBottom:4,fontWeight:600}}>Web Frontend / Production</div>
        <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><KeyRound style={{color:"var(--color-accent-primary)"}}/> Secret Editor</h1>
      </div>
      <div style={{display:"flex",gap:"var(--space-4)"}}>
        <button className="btn btn-ghost" onClick={()=>setShow(!show)}>{show?<EyeOff size={16}/>:<Eye size={16}/>} {show?"Hide Values":"Reveal Values"}</button>
        <button className="btn btn-primary"><Save size={16}/> Save Changes</button>
      </div>
    </div>

    <div className="card" style={{padding:"var(--space-5)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-4)"}}>
        <h3 style={{fontSize:"14px",fontWeight:700,textTransform:"uppercase"}}>Environment Variables</h3>
        <button className="btn btn-ghost btn-sm"><Plus size={14}/> Add Secret</button>
      </div>
      
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
        {secrets.map((s,i)=>(<div key={i} style={{display:"flex",gap:"var(--space-3)",alignItems:"center"}}>
          <div style={{flex:1}}><input type="text" className="input mono" defaultValue={s.key} style={{fontWeight:600}}/></div>
          <div style={{fontSize:"14px",color:"var(--color-text-tertiary)"}}>=</div>
          <div style={{flex:2,position:"relative"}}>
            <input type={show?"text":"password"} className="input mono" defaultValue={s.val} />
          </div>
          <button className="btn btn-ghost btn-sm" style={{padding:8}}><Copy size={16}/></button>
        </div>))}
      </div>
    </div>
  </div>);
}
