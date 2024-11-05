import React, { useContext, useEffect } from "react";
import SingleProductCard from "./SingleProductCard";
import { useParams } from "react-router-dom";
import { AllStates } from "../../context/AllStates";
import Error from "../Error/Error";

export default function ShowAllProducts() {
  const { categoryParams } = useParams();
  const { allProductsData, customProduct, setCustomProduct } =
    useContext(AllStates);

  useEffect(() => {
    if (categoryParams) {
      setCustomProduct(
        allProductsData?.filter((item) => item.category === categoryParams)
      );
    } else {
      setCustomProduct([...allProductsData]);
    }
  }, [categoryParams, allProductsData]);

  return (
    <>
      <section className="flex justify-evenly flex-wrap gap-3 w-full">
        {customProduct.length === 0 ? (
          <Error />
        ) : (
          customProduct?.map((item) => (
            <SingleProductCard key={item.product_id} data={item} />
          ))
        )}
      </section>
    </>
  );
}
