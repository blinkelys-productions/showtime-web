import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/utility/theme-provider";
import Home from "./pages/Home";
import Organizations from "./pages/organizations/index";
import Organization from "./pages/organizations/[orgId]/index";
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
            <Route path="/organizations/:orgId" element={<Organization />} />
            <Route path="/organizations/:orgId/events" element={<Organization />} />
            <Route path="/organizations/:orgId/events/:eventId" element={<Organization />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
