import React, { useContext } from "react";
import dummy from "../../assets/banner.jpg";
import cancelImg from "../../assets/cancel.png";
import { AllStates } from "../../context/AllStates";
export default function CartDetails({ data }) {
  const { setCart } = useContext(AllStates);
  function handelCancel(clickedData) {
    setCart((pre) =>
      pre.filter((item) => item.product_id !== clickedData.product_id)
    );
  }
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row shadow-lg rounded-xl gap-3 p-4 mt-5">
        <div className="md:w-60 w-full">
          <img className="w-full rounded-lg" src={dummy} alt="" />
        </div>
        <div className="w-full">
          <h1 className=" w-full mb-5 items-center gap-2 flex justify-between text-lg md:text-2xl font-bold">
            {data?.product_title}
            <img
              onClick={() => handelCancel(data)}
              className="w-8 h-8 cursor-pointer active:scale-95"
              src={cancelImg}
              alt=""
            />{" "}
          </h1>
          <p className="text-lightWhite">{data?.description}</p>
          <h2 className="text-lg text-[#141414e9] font-bold">
            Price: $ {data?.price}
          </h2>
        </div>
      </div>
    </>
  );
}
