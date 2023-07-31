/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { useGetSingleProductQuery } from "@/redux/features/products/productsApi";
import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const { data, isLoading, error } = useGetSingleProductQuery(id);

  // const {
  //   image,
  //   name,
  //   description,
  //   category,
  //   status,
  //   price,
  //   individualRating,
  //   averageRating,
  //   keyFeatures,
  //   reviews,
  // } = data;

  console.log(data);

  return (
    <div className="flex flex-col justify-center mt-10 mx-auto font-[Poppins]">
      <h1 className="text-left md:ml-48 ml-20 text-3xl text-lime-800 mt-20">
        Featured Products Details
      </h1>
      <hr className="mx-48 my-2" />
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-4xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img src={data?.image} alt="product" className="rounded-md" />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-orange-800 font-bold">{data?.category}</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                {data?.individualRating} &nbsp;
                <span className="text-gray-500 font-normal">(Individual)</span>
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                {data?.averageRating} &nbsp;
                <span className="text-gray-500 font-normal">(Average)</span>
              </p>
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-lg text-base font-bold text-fuchsia-800 hidden md:block">
              {data?.status}
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-2xl text-xl">
            {data?.name}
          </h3>
          <p className="md:text-base text-gray-500 text-base">
            {data?.description}
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-black text-gray-800">
              Price: ${data?.price}
            </p>
            <p className="text-base font-black text-gray-800">
              Brand: {data?.keyFeatures?.Brand}
            </p>
            <p className="text-base font-black text-gray-800">
              Model: {data?.keyFeatures?.Model}
            </p>
          </div>
          <h3 className="text-sm font-bold">Reviews:</h3>
          {data?.reviews?.map((review, index) => (
            <div key={index} className="review-card">
              <p className="text-sm">
                {index + 1}: {review.comment} (Rating: {review.rating})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
