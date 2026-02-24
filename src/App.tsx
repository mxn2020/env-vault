import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProjectsPage from "./pages/ProjectsPage";
import SecretEditorPage from "./pages/SecretEditorPage";
import AuditTrailPage from "./pages/AuditTrailPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
        <Route path="/" element={<ProjectsPage />} /> <Route path="/secrets" element={<SecretEditorPage />} />
        <Route path="/audit" element={<AuditTrailPage />} /> <Route path="/settings" element={<AuditTrailPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
