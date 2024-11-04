import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import cartImg from "../assets/cart.png";
import loveImg from "../assets/love.png";
export default function Nav() {
  const { pathname } = useLocation();

  const { categoryParams } = useParams();
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
        } py-4 w-full mx-auto flex justify-between items-center`}
      >
        <h1 className="lg:text-2xl text-xl font-bold">Gadget Heaven</h1>
        <div className=" flex items-center gap-4 text-sm">
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
            className={({ isActive }) => (isActive ? `` : "")}
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/dashbord"}
            className={({ isActive }) =>
              isActive ? `text-primary font-bold` : ""
            }
          >
            Dashbord
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
            } w-9 p-2 rounded-full border-2`}
          >
            <img className="w-full" src={cartImg} alt="" />
          </div>
          <div
            className={`${
              pathname === "/" ||
              pathname === `/${categoryParams}` ||
              pathname === `/${decodedCategoryParams}`
                ? "bg-white"
                : ""
            } w-9 p-2 rounded-full border-2`}
          >
            <img className="w-full" src={loveImg} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
