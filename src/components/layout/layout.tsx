import { Outlet } from "react-router-dom";
import Header from "../navigation/header";
import Footer from "../navigation/footer";

function Layout() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-col flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
