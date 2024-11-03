import React from "react";
import SingleProductCard from "./SingleProductCard";

export default function ShowAllProducts() {
  return (
    <>
      <section className="flex justify-evenly flex-wrap gap-3">
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
      </section>
    </>
  );
}
