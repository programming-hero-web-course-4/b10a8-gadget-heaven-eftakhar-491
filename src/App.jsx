import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main className="bg-[#f4f4f4cb] font-sora max-w-[1600px] mx-auto">
        {/* <Nav /> */}
        <Header />

        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
