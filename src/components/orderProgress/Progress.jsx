import React, { useContext } from "react";
import ProgressDetails from "./ProgressDetails";
import { AllStates } from "../../context/AllStates";

export default function Progress() {
  const { progress } = useContext(AllStates);
  return (
    <>
      <section className="">
        <div className="w-full bg-primarycolor py-12">
          <h1 className="text-4xl font-bold text-white text-center">
            Order Progress
          </h1>
          <p className="text-center  text-sm text-white">
            Here you can see all your order progress , item you order and <br />{" "}
            you can show FAQ section for your query{" "}
          </p>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-4/5 w-11/12 mx-auto">
          {progress.length === 0 ? (
            <h1 className="text-center py-10 font-bold text-3xl text-[#700000]">
              You Have no Order placed!
            </h1>
          ) : (
            progress?.map((item, i) => (
              <ProgressDetails key={i + 5} data={item} />
            ))
          )}
        </section>
        {/* FAQ */}
        <div className="mx-auto lg:w-4/5 mt-8">
          <h1 className="text-2xl font-bold text-center mb-5">FAQs</h1>
          <div className="collapse collapse-plus bg-base-200 ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </section>
      {/* <ProgressDetails /> */}
    </>
  );
}
