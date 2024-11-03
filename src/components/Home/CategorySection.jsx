import React, { useContext } from "react";
import { AllStates } from "../../context/AllStates";
import { NavLink } from "react-router-dom";

export default function CategorySection() {
  const { allProductsCategoryData } = useContext(AllStates);
  console.log(allProductsCategoryData);
  return (
    <>
      <div className="w-48 h-fit bg-white rounded-md p-4 flex-shrink-0 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " block cursor-pointer active:scale-95 bg-primary text-white rounded-xl mt-2 font-semibold px-4 py-2"
              : "block cursor-pointer active:scale-95 hover:bg-primary hover:text-white rounded-xl mt-2 text-primary font-semibold px-4 py-2 bg-[#09080F0D]"
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
                ? " block cursor-pointer active:scale-95 bg-primary text-white rounded-xl mt-2 font-semibold px-4 py-2"
                : "block cursor-pointer active:scale-95 hover:bg-primary hover:text-white rounded-xl mt-2 text-primary font-semibold px-4 py-2 bg-[#09080F0D]"
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
