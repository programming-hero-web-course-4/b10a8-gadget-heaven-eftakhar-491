import React from "react";
import dummy from "../../assets/banner.jpg";
import cancelImg from "../../assets/cancel.png";
export default function WishDetails() {
  return (
    <>
      <div className="bg-white flex shadow-lg rounded-xl gap-3 p-4 mt-5">
        <div className="w-60">
          <img className="w-full rounded-lg" src={dummy} alt="" />
        </div>
        <div className="w-full">
          <h1 className=" w-full mb-5 flex justify-between text-2xl font-bold">
            Samsung Galaxy S23 Ultra{" "}
            <img
              className="w-8 cursor-pointer active:scale-95"
              src={cancelImg}
              alt=""
            />{" "}
          </h1>
          <p className="text-lightWhite">
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>
          <h2 className="text-lg text-[#141414e9] font-bold">
            Price: $ 999.99
          </h2>
          <button className="active:scale-95 text-white bg-primary rounded-3xl px-4 py-1 font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
