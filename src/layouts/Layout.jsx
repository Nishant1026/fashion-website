import Nav from "../pages/nav.jsx";
import Footer from "../pages/Footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* HEADER */}
      <Nav />

      {/* PAGE CONTENT */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Layout;