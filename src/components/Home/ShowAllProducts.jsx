import React, { useContext, useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
import { useParams } from "react-router-dom";
import { AllStates } from "../../context/AllStates";

export default function ShowAllProducts() {
  const { categoryParams } = useParams();
  const { allProductsData, customProduct, setCustomProduct } =
    useContext(AllStates);

  useEffect(() => {
    if (categoryParams) {
      setCustomProduct(
        allProductsData.filter((item) => item.category === categoryParams)
      );
    } else {
      setCustomProduct([...allProductsData]);
    }
  }, [categoryParams, allProductsData]);
  console.log(categoryParams, customProduct);
  return (
    <>
      <section className="flex justify-evenly flex-wrap gap-3 w-full">
        {customProduct.length === 0
          ? "Not Found"
          : customProduct?.map((item) => (
              <SingleProductCard key={item.product_id} data={item} />
            ))}
        {/* <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard /> */}
      </section>
    </>
  );
}
