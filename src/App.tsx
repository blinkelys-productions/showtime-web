import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/utility/theme-provider";
import Home from "./pages/Home";
import Organizations from "./pages/organizations/index";
import OrganizationCreator from "./pages/organizations/create";
import Organization from "./pages/organizations/[orgId]/index";
import Admin from "./pages/admin";
import AdminDashboard from "./pages/admin/dashboard"
import Layout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/organizations/create" element={<OrganizationCreator />} />
            <Route path="/organizations/:orgId" element={<Organization />} />
            <Route path="/organizations/:orgId/events" element={<Organization />} />
            <Route path="/organizations/:orgId/events/:eventId" element={<Organization />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
