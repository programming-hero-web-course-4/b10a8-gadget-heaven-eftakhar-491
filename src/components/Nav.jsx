import React, { useContext, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import cartImg from "../assets/cart.png";
import loveImg from "../assets/love.png";
import { AllStates } from "../context/AllStates";

export default function Nav() {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  const { categoryParams } = useParams();
  const { cart, wish } = useContext(AllStates);
  const decodedCategoryParams =
    categoryParams && categoryParams.split(" ").join("%20");

  return (
    <>
      <nav
        className={`${
          pathname === "/" ||
          pathname === `/${categoryParams}` ||
          pathname === `/${decodedCategoryParams}`
            ? "text-white px-[10%]"
            : "bg-white px-[10%]"
        } relative py-4 w-full mx-auto flex justify-between items-center`}
      >
        <h1 className="flex items-center gap-2 md:text-2xl text-sm font-bold">
          <svg
            onClick={() => setMenu((pre) => !pre)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:hidden cursor-pointer active:scale-95 size-6 w-10 rounded-full hover:bg-[#00000024]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          Gadget Heaven
        </h1>
        <div
          className={`${
            pathname === "/" ||
            pathname === `/${categoryParams}` ||
            pathname === `/${decodedCategoryParams}`
              ? "lg:text-white text-black"
              : "bg-white "
          } absolute ${
            menu
              ? " top-14 transition-[top] duration-500 ease-in-out"
              : "-top-40"
          } rounded-xl lg:top-auto px-4 py-4 lg:py-0 lg:px-0 bg-white lg:bg-[#0000] lg:left-1/2 lg:-translate-x-1/2 flex-col lg:flex-row flex items-center gap-4 text-sm`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive &&
              (pathname === "/" ||
                pathname === `/${categoryParams}` ||
                pathname === `/${decodedCategoryParams}`)
                ? "underline font-bold"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/statistics"}
            className={({ isActive }) =>
              isActive ? `text-primarycolor font-bold` : ""
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/dashbord"}
            className={({ isActive }) =>
              isActive ? `text-primarycolor font-bold` : ""
            }
          >
            Dashbord
          </NavLink>
          <NavLink
            to={"/progress"}
            className={({ isActive }) =>
              isActive ? `text-primarycolor font-bold` : ""
            }
          >
            Progress
          </NavLink>
        </div>
        <div className="flex gap-3 items-center">
          <div
            className={`${
              pathname === "/" ||
              pathname === `/${categoryParams}` ||
              pathname === `/${decodedCategoryParams}`
                ? "bg-white"
                : ""
            } w-9 p-2 rounded-full border-2 relative`}
          >
            {cart.length === 0 ? (
              ""
            ) : (
              <div className="absolute -top-3 left-5 border-2 text-black bg-white w-5 text-[12px] font-semibold text-center rounded-full">
                {cart.length}
              </div>
            )}
            <img className="w-full" src={cartImg} alt="" />
          </div>
          <div
            className={`${
              pathname === "/" ||
              pathname === `/${categoryParams}` ||
              pathname === `/${decodedCategoryParams}`
                ? "bg-white"
                : ""
            } w-9 p-2 rounded-full border-2 relative`}
          >
            {wish.length === 0 ? (
              ""
            ) : (
              <div className="absolute -top-3 left-5 border-2 text-black bg-white w-5 text-[12px] font-semibold text-center rounded-full">
                {wish.length}
              </div>
            )}
            <img className="w-full" src={loveImg} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
