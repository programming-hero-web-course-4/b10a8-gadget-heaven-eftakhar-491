import React, { useContext } from "react";
import CartDetails from "./CartDetails";
import { AllStates } from "../../context/AllStates";

export default function Cart({ setBuy }) {
  const { cart, setCart } = useContext(AllStates);
  return (
    <>
      <section className="mt-4 mx-auto lg:w-4/5 w-11/12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-bold text-2xl">Cart</h1>
          <div className="flex flex-col md:flex-row gap-3">
            <h1 className="text-xl md:text-2xl font-bold">
              Total cost: $ {cart?.reduce((acc, crr) => acc + crr.price, 0)}
            </h1>
            <button
              onClick={() => {
                setCart((pre) => [...pre.sort((a, b) => b.price - a.price)]);
              }}
              className="flex items-center gap-2 border-2 hover:bg-primary active:scale-95 hover:text-white border-primary px-4 py-1 text-primary font-semibold rounded-3xl"
            >
              Sort by Price{" "}
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
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                cart.length !== 0 && setBuy(true);
              }}
              className={`${
                cart.length === 0
                  ? " text-black bg-lightWhite rounded-3xl px-4 py-1 font-bold"
                  : "border-2 border-primary hover:bg-white hover:text-primary active:scale-95 text-white bg-primary rounded-3xl px-4 py-1 font-bold"
              }`}
            >
              Purchase
            </button>
          </div>
        </div>
        <div>
          {cart?.map((item, i) => (
            <CartDetails key={i + 1} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
