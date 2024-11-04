import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AllStates } from "../../context/AllStates";

export default function SingleProductCard({ data }) {
  const {
    setProductDetailsData,
    setCartDesiable,
    cart,
    setWishDesiable,
    wish,
  } = useContext(AllStates);

  return (
    <>
      <div className="w-72 p-4 rounded-lg bg-white justify-between flex flex-col">
        <div>
          <img className="rounded-lg" src="./banner.jpg" alt="" />
        </div>
        <h1 className=" mt-3 font-bold text-xl">{data?.product_title}</h1>
        <p className="text-sm text-lightWhite">$ Price: {data?.price}</p>
        <Link to={`/product`}>
          <button
            onClick={() => {
              setProductDetailsData(data);
              localStorage.setItem("pd", JSON.stringify(data));
              setCartDesiable(
                cart.find((item) => item.product_id === data.product_id)
                  ? true
                  : false
              );
              setWishDesiable(
                wish.find((item) => item.product_id === data.product_id)
                  ? true
                  : false
              );
            }}
            className="mt-2 w-fit active:scale-95 hover:bg-primary hover:text-white rounded-xl text-primary font-semibold px-4 py-2 border-2 border-primary"
          >
            View Details
          </button>
        </Link>
      </div>
    </>
  );
}
