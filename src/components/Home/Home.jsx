import React, { useContext, useEffect } from "react";
import ShowAllProducts from "./ShowAllProducts";
import CategorySection from "./CategorySection";
import { AllStates } from "../../context/AllStates";
import axios from "axios";
import { Outlet } from "react-router-dom";
export default function Home() {
  const { allProductsData, setAllProductsCategoryData } = useContext(AllStates);

  useEffect(() => {
    axios
      .get("./productsCategory.json")
      .then((res) => setAllProductsCategoryData(res.data));
  }, [allProductsData]);
  return (
    <>
      <section className="mt-56 md:mt-80  lg:w-4/5 mx-auto">
        <h1 className="md:text-3xl text-lg font-bold text-center mb-5">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="flex justify-evenly lg:flex-row flex-col">
          <CategorySection />
          <Outlet />
          {/* <ShowAllProducts /> */}
        </div>
      </section>
    </>
  );
}
