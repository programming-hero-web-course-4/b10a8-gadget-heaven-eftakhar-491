import React, { useContext } from "react";
import ProgressDetails from "./ProgressDetails";
import { AllStates } from "../../context/AllStates";

export default function Progress() {
  const { progress } = useContext(AllStates);
  const faqData = [
    {
      question: "What do the different order statuses mean?",
      answer:
        "Order statuses help you track your order’s progress. 'Order Placed' means we’ve received your order, 'Processing' means we’re preparing it, 'Shipped' means it’s on the way, and 'Delivered' means it has arrived at your address.",
    },
    {
      question: "How long does each stage of the order process take?",
      answer:
        "Order processing usually takes 1-2 business days, shipping can take 3-7 business days depending on your location, and delivery times may vary by carrier.",
    },
    {
      question: "Can I make changes to my order after it has been placed?",
      answer:
        "Once an order has been placed, we can make changes if it’s still in the 'Order Placed' status. Please contact our support team immediately for assistance.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes, you can cancel your order if it's still in the 'Order Placed' or 'Processing' stages. Once it has been shipped, cancellation is not possible, but you may initiate a return once it arrives.",
    },
    {
      question: "How can I track my shipped order?",
      answer:
        "When your order is shipped, you’ll receive an email with a tracking number. You can use this number on our website or the carrier’s site to get real-time updates on your delivery.",
    },
    {
      question: "What if my order is delayed?",
      answer:
        "Occasionally, orders may be delayed due to high demand, weather conditions, or other factors. If your order is delayed, we’ll keep you updated via email or you can contact customer support for more details.",
    },
    {
      question: "What should I do if my order arrives damaged?",
      answer:
        "If your order arrives damaged, please contact our customer support within 48 hours. We’ll assist you with the return process and arrange for a replacement or refund.",
    },
    {
      question: "How can I return or exchange an item?",
      answer:
        "To return or exchange an item, go to your order history, select the order, and initiate a return request. Follow the instructions provided, and remember to include all original packaging and accessories.",
    },
  ];

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
        <div className="mx-auto lg:w-3/5 w-11/12 mt-8 bg-white px-2 lg:px-14 py-8 rounded-2xl">
          <h1 className="text-2xl font-bold text-center mb-5">FAQs</h1>
          {faqData.map((item, i) => (
            <div key={i + 7} className="collapse collapse-plus bg-base-200 ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {item?.question}
              </div>
              <div className="collapse-content">
                <p>{item?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
