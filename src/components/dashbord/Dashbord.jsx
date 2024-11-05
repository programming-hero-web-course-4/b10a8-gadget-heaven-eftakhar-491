import React, { useState } from "react";
import Cart from "./Cart";
import Wish from "./Wish";
import Modal from "./Modal";

export default function Dashbord() {
  const [cartWish, setCartWish] = useState(true);
  const [buy, setBuy] = useState(false);
  return (
    <>
      <section>
        <div className=" w-full bg-primarycolor pb-8">
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
              className={`${
                cartWish ? "bg-white text-primarycolor" : " text-white"
              } w-32 border-2 border-white  py-1 rounded-3xl font-bold`}
            >
              {" "}
              Cart
            </button>
            <button
              onClick={() => setCartWish(false)}
              className={`${
                cartWish ? " text-white" : "bg-white text-primarycolor"
              } w-32 border-2 border-white  py-1 rounded-3xl font-bold`}
            >
              Wishlist
            </button>
          </div>
        </div>
        {cartWish ? <Cart setBuy={setBuy} /> : <Wish />}
      </section>
      {buy && <Modal setBuy={setBuy} />}
    </>
  );
}
