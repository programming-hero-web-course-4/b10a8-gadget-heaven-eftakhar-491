import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <main className="font-sora max-w-[1600px] mx-auto">
        <Header />
        <h1>hello</h1>
        <Outlet />
      </main>
    </>
  );
}

export default App;
