import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <Navbar />
      </div>
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
