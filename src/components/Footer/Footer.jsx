import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white mt-16 py-28">
        <h1 className="md:text-4xl text-center font-bold text-2xl">
          Gadget Heaven
        </h1>
        <p className="text-sm text-lightWhite text-center mt-3 mb-4">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <hr className="border-lightWhite w-11/12 lg:w-4/5 mx-auto" />
        <div className="w-11/12 md:w-1/3 mx-auto flex justify-between mt-5">
          <div>
            <h1 className="text-center font-bold text-xl">Service</h1>
            <ul className="text-center text-sm text-lightWhite">
              <li className="hover:text-black cursor-pointer">
                Product Support
              </li>
              <li className="hover:text-black cursor-pointer">
                Order Tracking
              </li>
              <li className="hover:text-black cursor-pointer">
                Shipping Delivery
              </li>
              <li className="hover:text-black cursor-pointer">Returns</li>
            </ul>
          </div>

          <div>
            <h1 className="text-center font-bold text-xl">Company</h1>
            <ul className="text-center text-sm text-lightWhite">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Returns</li>
            </ul>
          </div>
          <div>
            <h1 className="text-center font-bold text-xl">Legal</h1>
            <ul className="text-center text-sm text-lightWhite">
              <li className="hover:text-black cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-black cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-black cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <hr className="mt-6 mb-4 border-lightWhite w-11/12 lg:w-4/5 mx-auto" />

        <p className="text-center text-sm font-bold text-lightWhite">
          All Right Reserve @Gadget Heaven
        </p>
      </footer>
    </>
  );
}
