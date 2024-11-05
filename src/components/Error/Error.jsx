import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div
        className={`w-full ${
          error
            ? "h-screen flex flex-col justify-center"
            : "h-[95%] bg-white flex flex-col justify-center"
        } `}
      >
        <h1 className="text-center font-bold text-6xl">Opps!</h1>
        <h2 className="mt-4 text-lg font-semibold text-center">
          {" "}
          {error ? `${error.status} Not Found` : "Data Not Found"}
        </h2>

        {error && (
          <>
            {" "}
            <p className="text-center mt-2 max-w-[540px] text-sm font-semibold underline text-lightWhite mx-auto">
              {error.data}
            </p>
            <button className="hover:bg-primarycolor hover:text-white active:scale-95 border-2 border-primarycolor rounded-3xl px-4 py-1 mt-4 text-primarycolor text-center block mx-auto font-bold">
              Go to HOMEPAGE
            </button>
          </>
        )}
      </div>
    </>
  );
}
