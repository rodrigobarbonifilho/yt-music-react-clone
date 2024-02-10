import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Siderbar from "./components/Sidebar";
import { StyledApp } from "./style";

export default function App() {
  return (
    <StyledApp>
      <Header />
      <main>
        <Siderbar />
        <Outlet />
      </main>
      <Footer />
    </StyledApp>
  );
}
