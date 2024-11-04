import { Outlet, useLocation, useParams } from "react-router-dom";
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
  const [productDetailsData, setProductDetailsData] = useState({});
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  console.log(cart, wish);
  useEffect(() => {
    axios.get("./productsData.json").then((res) => {
      setAllProductsData(res.data);
    });
  }, []);
  const { pathname } = useLocation();
  const { categoryParams } = useParams();
  const decodedCategoryParams =
    categoryParams && categoryParams.split(" ").join("%20");

  return (
    <>
      <AllStates.Provider
        value={{
          cart,
          setCart,
          wish,
          setWish,
          customProduct,
          setCustomProduct,
          allProductsCategoryData,
          setAllProductsCategoryData,
          allProductsData,
          setAllProductsData,
          productDetailsData,
          setProductDetailsData,
        }}
      >
        <main className="relative bg-[#f4f4f4cb] font-sora max-w-[1600px] mx-auto">
          {/* <Nav /> */}
          {/* <Header /> */}
          {pathname === "/" ||
          pathname === `/${categoryParams}` ||
          pathname === `/${decodedCategoryParams}` ? (
            <Header />
          ) : (
            <Nav />
          )}
          <Outlet />
          <Footer />
        </main>
      </AllStates.Provider>
    </>
  );
}

export default App;
