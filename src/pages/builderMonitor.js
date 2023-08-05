/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import Loader from "@/components/UI/Loader";
import {
  useGetMonitorProductQuery,
  usePostAddToBuildMutation,
} from "@/redux/features/products/productsApi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const BuilderMonitorPage = () => {
  const { data, isLoading } = useGetMonitorProductQuery();

  const { data: session } = useSession();

  const router = useRouter();

  const [postAddToBuild] = usePostAddToBuildMutation();

  const handleAddToBuilder = async (product) => {
    const isLoggedInUser = session?.user?.email;

    const productWithUserEmail = {
      ...product,
      userEmail: isLoggedInUser,
    };

    await postAddToBuild({ data: productWithUserEmail });
    router.push(`/pcbuilder?productId=${product._id}`);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="py-20 font-[Poppins]">
      <h1 className="text-left md:ml-20 ml-20 text-3xl mt-5 text-sky-500 mb-5">
        Monitor ({data?.data?.length} Products Found)
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

                  <button
                    onClick={() => handleAddToBuilder(product)}
                    className="mt-4 text-lg w-full text-white bg-indigo-600 py-2 rounded-md shadow-lg"
                  >
                    Add to PC Builder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuilderMonitorPage;

BuilderMonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
