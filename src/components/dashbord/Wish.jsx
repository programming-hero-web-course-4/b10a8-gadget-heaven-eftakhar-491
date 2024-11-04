import React, { useContext } from "react";
import WishDetails from "./WishDetails";
import { AllStates } from "../../context/AllStates";

export default function Wish() {
  const { wish } = useContext(AllStates);
  return (
    <>
      <section className="mt-4 mx-auto lg:w-4/5 w-11/12">
        <h1 className="font-bold text-2xl">WishList</h1>
        <div>
          {wish?.map((item, i) => (
            <WishDetails data={item} key={i + 2} />
          ))}
        </div>
      </section>
    </>
  );
}
