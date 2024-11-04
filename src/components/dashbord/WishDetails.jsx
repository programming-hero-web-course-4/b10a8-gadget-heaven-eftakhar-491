import React, { useContext } from "react";
import dummy from "../../assets/banner.jpg";
import cancelImg from "../../assets/cancel.png";
import { AllStates } from "../../context/AllStates";
export default function WishDetails({ data }) {
  const { setCart, setWish } = useContext(AllStates);
  function handelCancel(clickedData) {
    setWish((pre) =>
      pre.filter((item) => item.product_id !== clickedData.product_id)
    );
  }
  return (
    <>
      <div className="bg-white flex-col md:flex-row flex shadow-lg rounded-xl gap-3 p-4 mt-5">
        <div className="w-full md:w-60">
          <img className="w-full rounded-lg" src={dummy} alt="" />
        </div>
        <div className="w-full">
          <h1 className=" w-full mb-5 flex justify-between gap-2 items-center text-lg md:text-2xl font-bold">
            {data?.product_title}
            <img
              onClick={() => handelCancel(data)}
              className="w-8 cursor-pointer active:scale-95"
              src={cancelImg}
              alt=""
            />{" "}
          </h1>
          <p className="text-lightWhite">{data?.description}</p>
          <h2 className="text-lg text-[#141414e9] font-bold">
            Price: $ {data.price}
          </h2>
          <button
            onClick={() => {
              setCart((pre) => [
                ...pre.filter((item) => item.product_id !== data.product_id),
                data,
              ]);
            }}
            className="active:scale-95 text-white bg-primary rounded-3xl px-4 py-1 font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
