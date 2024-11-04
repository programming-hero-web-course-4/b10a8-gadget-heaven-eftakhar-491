import React, { useContext } from "react";
import right from "../../assets/Group.png";
import { AllStates } from "../../context/AllStates";
import { useNavigate } from "react-router-dom";
export default function Modal({ setBuy }) {
  const { cart, setCart } = useContext(AllStates);
  const navigate = useNavigate();
  return (
    <>
      <section className="fixed bg-lightWhite top-0 w-full h-screen flex justify-center items-center">
        <div className="bg-white w-11/12 md:w-80 p-5 rounded-xl">
          <img className="mx-auto" src={right} alt="" />
          <h1 className="text-xl font-bold my-3 text-center">
            Payment Successfully
          </h1>
          <hr className="border-lightWhite" />
          <p className="text-center mt-3 text-sm text-lightWhite">
            Thanks for purchasing.
          </p>
          <h2 className="text-center font-semibold text-[#111111d1]">
            Total: ${cart?.reduce((acc, crr) => acc + crr.price, 0)}
          </h2>
          <button
            onClick={() => {
              setBuy(false);
              setCart([]);
              navigate("/");
            }}
            className="active:scale-95 block border-2 py-1 rounded-3xl mt-3 border-lightWhite text-center w-full"
          >
            Close
          </button>
        </div>
      </section>
    </>
  );
}
