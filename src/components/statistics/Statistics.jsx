import { useContext, useEffect } from "react";
import StateDetails from "./StateDetails";
import { AllStates } from "../../context/AllStates";

export default function Statistics() {
  const { allProductsData, setStatistics, statistics } = useContext(AllStates);
  useEffect(() => {
    setStatistics([
      ...allProductsData?.map((item) => {
        return {
          name: item?.product_title,
          uv: item?.rating,
          pv: item?.price,
          amt: item?.price,
        };
      }),
    ]);
  }, [allProductsData]);
  console.log(statistics);
  return (
    <>
      <section className="">
        <div className="bg-primarycolor py-12 w-full">
          <h1 className="text-center text-white font-bold text-4xl">
            Statistics
          </h1>
          <p className="max-w-[540px] mx-auto text-center text-sm text-white mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="h-[400px] mx-auto">
          <StateDetails data={statistics} />
        </div>
      </section>
    </>
  );
}
