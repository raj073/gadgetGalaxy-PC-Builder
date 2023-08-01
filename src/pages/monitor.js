/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import Loader from "@/components/UI/Loader";
import { useGetMonitorProductQuery } from "@/redux/features/products/productsApi";
import Link from "next/link";
import React from "react";

const MonitorPage = () => {
  const { data, isLoading } = useGetMonitorProductQuery();

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-20 font-[Poppins]">
      <h1 className="text-left md:ml-20 ml-20 text-3xl mt-5 text-sky-500 mb-5">
        RAM Category Sections
      </h1>
      <hr className="mx-20 my-2" />
      <div className="min-h-screen flex justify-center items-center py-10">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {data?.data?.map((product) => (
            <div key={product?._id}>
              <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl text-center font-bold text-indigo-600">
                  {product?.category}
                </h3>
                <div className="relative">
                  <img
                    className="w-full h-48 rounded-xl"
                    src={product?.image}
                    alt="pcImage"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    {product?.status}
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">
                  {product?.name}
                </h1>
                <div className="my-4">
                  <div className="flex font-bold space-x-1 items-center">
                    <span>Price: $</span>
                    <p>{product?.price}</p>
                  </div>
                  <div className="flex font-bold space-x-1 items-center">
                    <span>Brand:</span>
                    <p>{product?.keyFeatures?.Brand}</p>
                  </div>
                  <div className="flex font-bold space-x-1 items-center">
                    <span>Rating:</span>
                    <p>{product?.individualRating} (Out of 5 Stars)</p>
                  </div>
                  <Link href={`/product/${product?._id}`}>
                    <button className="mt-4 text-lg w-full text-white bg-indigo-600 py-2 rounded-md shadow-lg">
                      Show Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
