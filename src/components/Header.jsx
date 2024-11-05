import React from "react";
import Nav from "./Nav";
import banner from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  function handelShopNow() {
    navigate("/dashbord");
  }
  return (
    <>
      <header className="h-[440px] md:h-[500px] bg-primarycolor lg:w-4/5 w-11/12 mx-auto m-3 ring-[2px] ring-offset-4 rounded-xl ring-[#e9e9e9]">
        <Nav />
        <h1 className="mt-5  md:text-5xl text-lg text-center font-bold text-white">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="max-w-[700px] mx-auto text-center mt-3 text-sm text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          onClick={handelShopNow}
          className="mb-6 font-bold mt-5 px-4 py-1 bg-white mx-auto block rounded-xl text-primarycolor"
        >
          Shop Now
        </button>
        <div className="p-4 bg-[#ffffff6b] ring-4 ring-white rounded-xl lg:w-3/5 w-11/12 h-[280px] md:h-[400px] mx-auto">
          <img
            className="w-full rounded-xl h-full"
            src={banner}
            alt="banner Image"
          />
        </div>
      </header>
    </>
  );
}
