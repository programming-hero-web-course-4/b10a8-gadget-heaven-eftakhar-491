import React from "react";

export default function Cart() {
  return (
    <>
      <section className="mt-4 mx-auto lg:w-4/5 w-11/12">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Cart</h1>
          <div className="flex gap-3">
            <h1 className="text-2xl font-bold">Total cost: 999.99</h1>
            <button className="flex items-center gap-2 border-2 hover:bg-primary active:scale-95 hover:text-white border-primary px-4 py-1 text-primary font-semibold rounded-3xl">
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
            <button className="text-white bg-primary rounded-3xl px-4 py-1 font-bold">
              Purchase
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
