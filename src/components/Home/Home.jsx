import React from "react";
import ShowAllProducts from "./ShowAllProducts";
import CategorySection from "./CategorySection";
export default function Home() {
  return (
    <>
      <section className="mt-80 lg:w-4/5 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-5">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="  flex justify-evenly">
          <CategorySection />
          <ShowAllProducts />
        </div>
      </section>
    </>
  );
}
