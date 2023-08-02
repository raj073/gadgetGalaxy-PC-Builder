import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import React from "react";
import { BsCpu, BsMotherboard } from "react-icons/bs";

const PCBuilderPage = () => {
  return (
    <div className="text-gray-900 flex justify-center mt-24 md:mt-10 font-[Poppins]">
      <div className="m-0 sm:m-10 bg-white sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-2/3 p-6 sm:p-12 shadow-2xl rounded-tl-2xl rounded-b-lg">
          <div className="font-medium text-center text-lg sm:text-2xl uppercase text-gray-800">
            Gadget Galaxy PC Builder
          </div>
          <h2 className="text-center">Build Your Custom Computer </h2>
          <h3 className="text-center">
            Choose and Select the Desired Component
          </h3>

          <hr className="border-2 border-blue-300 hover:border-blue-500 my-2" />

          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <BsCpu size={50}></BsCpu>
              <h1 className="ps-4 text-lg font-semibold">CPU/Processor</h1>
            </div>
            <div>
              <Link href="">
                <button
                  class="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>
          <hr className="my-4 border-1 border-gray-400 hover:border-indigo-400" />
          <div className="my-2 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <BsMotherboard size={50}></BsMotherboard>
              <h1 className="ps-4 text-lg font-semibold">Motherboard</h1>
            </div>
            <div>
              <Link href="">
                <button
                  class="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>
          <hr className="my-3 border-1 border-gray-400 hover:border-indigo-400" />
        </div>
      </div>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
