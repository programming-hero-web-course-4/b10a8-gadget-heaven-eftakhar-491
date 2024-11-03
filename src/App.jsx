import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";

import { useEffect, useState } from "react";
import axios from "axios";
import { AllStates } from "./context/AllStates";

function App() {
  const [allProductsData, setAllProductsData] = useState([]);
  const [allProductsCategoryData, setAllProductsCategoryData] = useState([]);
  const [customProduct, setCustomProduct] = useState([]);
  useEffect(() => {
    axios.get("./productsData.json").then((res) => {
      setAllProductsData(res.data);
    });
  }, []);

  return (
    <>
      <AllStates.Provider
        value={{
          customProduct,
          setCustomProduct,
          allProductsCategoryData,
          setAllProductsCategoryData,
          allProductsData,
          setAllProductsData,
        }}
      >
        <main className="bg-[#f4f4f4cb] font-sora max-w-[1600px] mx-auto">
          {/* <Nav /> */}
          <Header />

          <Outlet />
          <Footer />
        </main>
      </AllStates.Provider>
    </>
  );
}

export default App;
