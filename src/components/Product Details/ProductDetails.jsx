import React, { useContext, useEffect, useState } from "react";
import demoimg from "..//../assets/banner.jpg";
import ReactStars from "react-rating-stars-component";
import wishlist from "../../assets/love.png";
import { AllStates } from "../../context/AllStates";
import { Bounce, toast } from "react-toastify";
export default function ProductDetails() {
  const {
    productDetailsData,
    setCart,
    setWish,
    cartDesiable,
    setCartDesiable,
    wishDesiable,
    setWishDesiable,
    cart,
  } = useContext(AllStates);

  function handelAddCart(clickedData) {
    setCartDesiable(true);
    setCart((pre) => {
      return [
        ...pre.filter((item) => item.product_id !== clickedData.product_id),
        clickedData,
      ];
    });
    cartDesiable ? "" : toast.success("add this item in cart!");
  }

  function handelWishClick(clickedData) {
    setWishDesiable(true);
    setWish((pre) => {
      return [
        ...pre.filter((item) => item.product_id !== clickedData.product_id),
        clickedData,
      ];
    });
    wishDesiable ? "" : toast.success("Wishlist Added");
  }
  console.log(productDetailsData);
  return (
    <>
      <section className="h-72 w-full bg-primarycolor mb-[750px]  md:mb-96">
        <h1 className="pt-8 text-white font-bold text-2xl md:text-4xl text-center">
          Product Details
        </h1>
        <p className="px-3 text-sm max-w-[600px] text-white text-center mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 w-11/12 lg:w-4/5 bg-white w-11-12 p-5 rounded-xl mx-auto">
          <div className="self-center w-11/12 md:w-1/2 lg:w-2/5">
            <img
              className="w-full rounded-xl"
              src={productDetailsData?.product_image}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              {productDetailsData?.product_title}
            </h1>
            <p className="text-lg font-semibold text-[#121212ce]">
              {" "}
              Price: $ {productDetailsData.price}
            </p>
            <h2 className="mt-4 w-fit px-3 text-sm rounded-2xl border-2 border-green bg-lightGreen text-green">
              {productDetailsData?.availability ? "In Stock" : "Out of Stock"}
            </h2>
            <p className="text-lightWhite mt-3">
              {productDetailsData.description}
            </p>
            <div>
              <h1 className="text-xl font-bold">Specification</h1>
              <ol className="ml-5 list-decimal">
                {productDetailsData?.specification?.map((item, i) => (
                  <li key={i + 3}>{item}</li>
                ))}
              </ol>
            </div>
            <div>
              <h1 className="text-lg font-bold">Rating</h1>
              <div className="flex items-center gap-3">
                <ReactStars
                  value={productDetailsData?.rating}
                  edit={false}
                  count={5}
                  size={30}
                  activeColor="#ffd700"
                  isHalf={true}
                />
                <span className="text-sm border-2 rounded-2xl px-2">
                  {productDetailsData?.rating}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handelAddCart(productDetailsData)}
                className={`${
                  cartDesiable
                    ? "bg-lightWhite px-4 py-2 rounded-2xl gap-2 font-semibold flex "
                    : "active:scale-95 px-4 py-2 rounded-2xl gap-2 font-semibold flex bg-primarycolor text-white"
                }`}
              >
                Add To Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <button
                onClick={() => handelWishClick(productDetailsData)}
                className={`${
                  wishDesiable
                    ? "bg-lightWhite w-10 p-2 flex justify-center items-center h-10 border-2  rounded-full"
                    : "active:scale-95 w-10 p-2 flex justify-center items-center h-10 border-2  rounded-full"
                }`}
              >
                <img src={wishlist} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
