import React from "react";
import WishDetails from "./WishDetails";

export default function Wish() {
  return (
    <>
      <section className="mt-4 mx-auto lg:w-4/5 w-11/12">
        <h1 className="font-bold text-2xl">WishList</h1>
        <div>
          <WishDetails />
          <WishDetails />
          <WishDetails />
          <WishDetails />
        </div>
      </section>
    </>
  );
}
