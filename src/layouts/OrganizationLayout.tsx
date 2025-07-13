import OrganizationNavbar from "@/components/custom/OrganizationNavbar";
import Footer from "@/components/custom/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <OrganizationNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
