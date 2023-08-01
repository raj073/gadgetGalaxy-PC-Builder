/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  const {
    _id,
    image,
    name,
    category,
    status,
    price,
    keyFeatures,
    individualRating,
  } = product;
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl text-center font-bold text-indigo-600">
        {category}
      </h3>
      <div className="relative">
        <img className="w-full h-48 rounded-xl" src={image} alt="pcImage" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          {status}
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">
        {name}
      </h1>
      <div className="my-4">
        <div className="flex font-bold space-x-1 items-center">
          <span>Price: $</span>
          <p>{price}</p>
        </div>
        <div className="flex font-bold space-x-1 items-center">
          <span>Brand:</span>
          <p>{keyFeatures?.Brand}</p>
        </div>
        <div className="flex font-bold space-x-1 items-center">
          <span>Rating:</span>
          <p>{individualRating} (Out of 5 Stars)</p>
        </div>
        <Link href={`/product/${_id}`}>
          <button className="mt-4 text-lg w-full text-white bg-indigo-600 py-2 rounded-md shadow-lg">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
