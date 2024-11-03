import React from "react";

export default function SingleProductCard() {
  return (
    <>
      <div className="w-72 p-4 rounded-lg bg-white">
        <div>
          <img className="rounded-lg" src="./banner.jpg" alt="" />
        </div>
        <h1 className=" mt-3 font-bold text-xl">Name</h1>
        <p className="text-sm text-lightWhite">Price: 99.99k</p>
        <button className="active:scale-95 hover:bg-primary hover:text-white rounded-xl mt-2 text-primary font-semibold px-4 py-2 border-2 border-primary">
          View Details
        </button>
      </div>
    </>
  );
}
