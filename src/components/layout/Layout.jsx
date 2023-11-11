import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <Navbar />
      </div>
      <div style={{ minHeight: "74vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}></div>
      <Footer />
    </div>
  );
};

export default Layout;
