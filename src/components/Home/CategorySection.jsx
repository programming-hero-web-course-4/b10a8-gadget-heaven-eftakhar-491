import React, { useContext } from "react";
import { AllStates } from "../../context/AllStates";
import { NavLink } from "react-router-dom";

export default function CategorySection() {
  const { allProductsCategoryData } = useContext(AllStates);
  console.log();
  return (
    <>
      <div className="lg:w-48 h-fit gap-2 bg-white rounded-md p-4 flex-shrink-0 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 mb-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " block cursor-pointer active:scale-95 bg-primarycolor text-white rounded-xl mt-2 font-semibold px-4 py-2"
              : "block cursor-pointer active:scale-95 hover:bg-primarycolor hover:text-white rounded-xl mt-2 text-primarycolor font-semibold px-4 py-2 bg-[#09080F0D]"
          }
          to={"/"}
        >
          All Products
        </NavLink>
        {allProductsCategoryData?.map((item) => (
          <NavLink
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? " block cursor-pointer active:scale-95 bg-primarycolor text-white rounded-xl mt-2 font-semibold px-4 py-2"
                : "block cursor-pointer active:scale-95 hover:bg-primarycolor hover:text-white rounded-xl mt-2 text-primarycolor font-semibold px-4 py-2 bg-[#09080F0D]"
            }
            to={`/${item.category}`}
          >
            {item.category}
          </NavLink>
        ))}
      </div>
    </>
  );
}
