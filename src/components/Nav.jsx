import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <nav
        className={`${
          pathname === "/" ? "text-white" : ""
        } py-4 w-4/5 mx-auto flex justify-between items-center`}
      >
        <h1 className="lg:text-2xl text-xl font-bold">Gadget Heaven</h1>
        <div className=" flex items-center gap-4 text-sm">
          <NavLink
            to={"/"}
            className={({ isActive }) => isActive && `underline font-bold`}
          >
            Home
          </NavLink>
          <NavLink
            to={"/statistics"}
            className={({ isActive }) =>
              isActive ? `underline font-bold` : ""
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/dashbord"}
            className={({ isActive }) =>
              isActive ? `underline font-bold` : ""
            }
          >
            Dashbord
          </NavLink>
        </div>
        <div className="flex gap-3 items-center">
          <div
            className={`${
              pathname === "/" ? "bg-white" : ""
            } w-9  p-2 rounded-full border-2`}
          >
            <img className="w-full" src="./cart.png" alt="" />
          </div>
          <div
            className={`${
              pathname === "/" ? "bg-white" : ""
            } w-9 p-2 rounded-full border-2`}
          >
            <img className="w-full" src="./love.png" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
