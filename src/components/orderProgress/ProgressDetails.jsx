import React from "react";

export default function ProgressDetails({ data }) {
  return (
    <>
      <div className="mt-8 bg-white p-9">
        <h1 className="text-2xl font-bold flex items-center flex-col lg:flex-row gap-3">
          Order placed_{" "}
          <span className="flex items-center gap-3 text-lg">
            <span>{data.date_time.toLocaleDateString()}</span>
            <span>{data.date_time.toLocaleTimeString()}</span>
          </span>
        </h1>
        <h2 className="text-sm font-bold mt-3">Ordered Item:</h2>
        <ol className="list-decimal ml-5 flex flex-col  w-full">
          {data.products?.map((item, i) => (
            <li key={i + 6}>{item}</li>
          ))}
        </ol>
        <section className="max-w-[500px] mx-auto flex">
          <div className=" text-center font-bold mt-9 text-sm text-white bg-[#9538e260] h-[500px] w-1 mx-auto">
            <div className=" justify-evenly items-center  flex-col flex w-1 h-[500px] bg-primarycolor">
              <span
                className={`${
                  data.order_receive ? "bg-primarycolor" : "bg-[#900000]"
                } w-6 h-6 py-1 rounded-full`}
              >
                {data?.order_receive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </span>
              <span
                className={`${
                  data?.processed ? "bg-primarycolor" : "bg-[#900000]"
                } w-6 h-6 py-1 rounded-full`}
              >
                {data?.order_receive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </span>
              <span
                className={`${
                  data?.shipped ? "bg-primarycolor" : "bg-[#900000]"
                } w-6 h-6 py-1 rounded-full`}
              >
                {data?.order_receive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </span>
              <span
                className={`${
                  data?.delivered ? "bg-primarycolor" : "bg-[#900000]"
                } w-6 h-6 py-1 rounded-full`}
              >
                {data?.order_receive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="size-4 mx-auto font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 text-center font-bold text-sm mt-9 text-white relative h-[500px] mx-auto">
            <div className=" justify-evenly items-center flex-col flex h-[500px]">
              <span
                className={`w-[170px] px-4 py-1 ${
                  data.order_receive ? "bg-primarycolor" : "bg-[#900000]"
                } rounded-full`}
              >
                Order Receive
              </span>
              <span
                className={`w-[170px] px-4 py-1 ${
                  data?.processed ? "bg-primarycolor" : "bg-[#900000]"
                } rounded-full`}
              >
                Processed
              </span>
              <span
                className={`w-[170px] px-4 py-1 ${
                  data?.shipped ? "bg-primarycolor" : "bg-[#900000]"
                } rounded-full`}
              >
                Shipped
              </span>
              <span
                className={`w-[170px] px-4 flex-shrink-0 py-1 ${
                  data?.delivered ? "bg-primarycolor" : "bg-[#900000]"
                } rounded-full`}
              >
                Delivered
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
