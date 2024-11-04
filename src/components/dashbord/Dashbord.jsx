import React, { useState } from "react";
import Cart from "./Cart";
import Wish from "./Wish";

export default function Dashbord() {
  const [cartWish, setCartWish] = useState(true);
  return (
    <>
      <section>
        <div className=" w-full bg-primary pb-8">
          <h1 className="pt-8 text-white font-bold text-2xl md:text-4xl text-center">
            Dashboard
          </h1>
          <p className="text-[12px] max-w-[600px] text-white text-center mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center mt-2 gap-3">
            <button
              onClick={() => setCartWish(true)}
              className="w-32 border-2 border-white text-white py-1 rounded-3xl font-bold"
            >
              {" "}
              Cart
            </button>
            <button
              onClick={() => setCartWish(false)}
              className="w-32 border-2 border-white text-white py-1 rounded-3xl font-bold"
            >
              Wishlist
            </button>
          </div>
        </div>
        {cartWish ? <Cart /> : <Wish />}
      </section>
    </>
  );
}
