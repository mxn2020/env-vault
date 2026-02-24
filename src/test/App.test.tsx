import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import ProjectsPage from "../pages/ProjectsPage"; import SecretEditorPage from "../pages/SecretEditorPage"; import AuditTrailPage from "../pages/AuditTrailPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
  it("Sidebar renders", () => { wrap(<Sidebar/>); expect(screen.getByText("Env Vault")).toBeInTheDocument(); });
  it("ProjectsPage renders", () => { wrap(<ProjectsPage/>); expect(screen.getByText("Payment Worker")).toBeInTheDocument(); });
  it("SecretEditorPage renders", () => { wrap(<SecretEditorPage/>); expect(screen.getAllByDisplayValue("DATABASE_URL")[0]).toBeInTheDocument(); });
  it("AuditTrailPage renders", () => { wrap(<AuditTrailPage/>); expect(screen.getByText("Accessed secret OPENAI_API_KEY")).toBeInTheDocument(); });
});
