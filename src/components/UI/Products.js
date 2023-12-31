import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import React from "react";
import Loader from "./Loader";
import Product from "./Product";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-20 font-[Poppins]">
      <h1 className="text-center text-3xl text-sky-500 mb-5">
        PC Components Featured Products
      </h1>
      <hr className="mx-48 my-2" />
      <div className="min-h-screen flex justify-center items-center py-10">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {data?.data?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
