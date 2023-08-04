/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import {
  useGetAddToBuildProductsMotherboardQuery,
  useGetAddToBuildProductsCPUQuery,
  useGetAddToBuildProductsRAMQuery,
  useGetAddToBuildProductsPowerQuery,
  useGetAddToBuildProductsStorageDeviceQuery,
  useGetAddToBuildProductsMonitorQuery,
} from "@/redux/features/products/productsApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsCpu, BsMotherboard, BsMemory } from "react-icons/bs";
import { GiPowerGenerator } from "react-icons/gi";
import { MdStorage, MdMonitor, MdImportantDevices } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import toast from "react-hot-toast";

const PCBuilderPage = () => {
  const router = useRouter();

  const { data: cpu } = useGetAddToBuildProductsCPUQuery();

  const { data: motherboard } = useGetAddToBuildProductsMotherboardQuery();

  const { data: ram } = useGetAddToBuildProductsRAMQuery();

  const { data: power } = useGetAddToBuildProductsPowerQuery();

  const { data: storage } = useGetAddToBuildProductsStorageDeviceQuery();

  const { data: monitor } = useGetAddToBuildProductsMonitorQuery();

  const handleCompleteBuild = () => {
    toast.success("Your Computer has been Built Successfully ", {
      position: "top-right",
    });
  };

  return (
    <div className="text-gray-900 flex justify-center mt-24 md:mt-10 font-[Poppins]">
      <div className="m-0 sm:m-10 bg-white sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-3/4 p-6 sm:p-12 shadow-2xl rounded-tl-2xl rounded-b-lg">
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
              <Link href="/builderCpu">
                <button
                  className="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>

          {cpu?.data.map((p) => (
            <div key={p._id} className="mt-5">
              <div className="flex justify-start">
                <img className="w-14 h-14" src={p?.image} alt="Image" />
                <div className="ps-3">
                  <div
                    className={`flex ${
                      window.innerWidth >= 1024
                        ? "justify-between"
                        : "justify-start"
                    } items-center sm:items-start text-base font-semibold flex-col lg:flex-row`}
                  >
                    <h1 className="text-orange-700">{p?.category}</h1>
                    <h1>{p?.status}</h1>
                  </div>
                  <div className="text-base font-semibold">{p?.name}</div>
                </div>
                <div className="ps-10">
                  <h1 className="text-lg font-bold">${p?.price}</h1>
                </div>
                <div className="ps-10">
                  <div className="flex items-center text-base font-bold">
                    <FcRating></FcRating>
                    <span className="ps-2 text-yellow-600">
                      {p?.individualRating}
                    </span>
                    <Link
                      href={`/`}
                      className="ml-12 text-red-500 hover:text-red-800"
                    >
                      <AiOutlineCloseSquare size={30}></AiOutlineCloseSquare>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-4 border-1 border-gray-400 hover:border-indigo-400" />
          <div className="my-2 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <BsMotherboard size={50}></BsMotherboard>
              <h1 className="ps-4 text-lg font-semibold">Motherboard</h1>
            </div>
            <div>
              <Link href="/builderMotherboard">
                <button
                  className="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>

          {motherboard?.data.map((p) => (
            <div key={p._id} className="mt-5">
              <div className="flex justify-start">
                <img className="w-14 h-14" src={p?.image} alt="Image" />
                <div className="ps-3">
                  <div
                    className={`flex ${
                      window.innerWidth >= 1024
                        ? "justify-between"
                        : "justify-start"
                    } items-center sm:items-start text-base font-semibold flex-col lg:flex-row`}
                  >
                    <h1 className="text-orange-700">{p?.category}</h1>
                    <h1>{p?.status}</h1>
                  </div>
                  <div className="text-base font-semibold">{p?.name}</div>
                </div>
                <div className="ps-10">
                  <h1 className="text-lg font-bold">${p?.price}</h1>
                </div>
                <div className="ps-10">
                  <div className="flex items-center text-base font-bold">
                    <FcRating></FcRating>
                    <span className="ps-2 text-yellow-600">
                      {p?.individualRating}
                    </span>
                    <Link
                      href={`/`}
                      className="ml-12 text-red-500 hover:text-red-800"
                    >
                      <AiOutlineCloseSquare size={30}></AiOutlineCloseSquare>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-3 border-1 border-gray-400 hover:border-indigo-400" />
          <div className="my-2 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <BsMemory size={50}></BsMemory>
              <h1 className="ps-4 text-lg font-semibold">RAM</h1>
            </div>
            <div>
              <Link href="/builderRam">
                <button
                  className="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>

          {ram?.data.map((p) => (
            <div key={p._id} className="mt-5">
              <div className="flex justify-start">
                <img className="w-14 h-14" src={p?.image} alt="Image" />
                <div className="ps-3">
                  <div
                    className={`flex ${
                      window.innerWidth >= 1024
                        ? "justify-between"
                        : "justify-start"
                    } items-center sm:items-start text-base font-semibold flex-col lg:flex-row`}
                  >
                    <h1 className="text-orange-700">{p?.category}</h1>
                    <h1>{p?.status}</h1>
                  </div>
                  <div className="text-base font-semibold">{p?.name}</div>
                </div>
                <div className="ps-10">
                  <h1 className="text-lg font-bold">${p?.price}</h1>
                </div>
                <div className="ps-10">
                  <div className="flex items-center text-base font-bold">
                    <FcRating></FcRating>
                    <span className="ps-2 text-yellow-600">
                      {p?.individualRating}
                    </span>
                    <Link
                      href={`/`}
                      className="ml-12 text-red-500 hover:text-red-800"
                    >
                      <AiOutlineCloseSquare size={30}></AiOutlineCloseSquare>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-3 border-1 border-gray-400 hover:border-indigo-400" />
          <div className="my-2 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <GiPowerGenerator size={50}></GiPowerGenerator>
              <h1 className="ps-4 text-lg font-semibold">Power Supply Unit</h1>
            </div>
            <div>
              <Link href="/builderPower">
                <button
                  className="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>

          {power?.data.map((p) => (
            <div key={p._id} className="mt-5">
              <div className="flex justify-start">
                <img className="w-14 h-14" src={p?.image} alt="Image" />
                <div className="ps-3">
                  <div
                    className={`flex ${
                      window.innerWidth >= 1024
                        ? "justify-between"
                        : "justify-start"
                    } items-center sm:items-start text-base font-semibold flex-col lg:flex-row`}
                  >
                    <h1 className="text-orange-700">{p?.category}</h1>
                    <h1>{p?.status}</h1>
                  </div>
                  <div className="text-base font-semibold">{p?.name}</div>
                </div>
                <div className="ps-10">
                  <h1 className="text-lg font-bold">${p?.price}</h1>
                </div>
                <div className="ps-10">
                  <div className="flex items-center text-base font-bold">
                    <FcRating></FcRating>
                    <span className="ps-2 text-yellow-600">
                      {p?.individualRating}
                    </span>
                    <Link
                      href={`/`}
                      className="ml-12 text-red-500 hover:text-red-800"
                    >
                      <AiOutlineCloseSquare size={30}></AiOutlineCloseSquare>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-3 border-1 border-gray-400 hover:border-indigo-400" />

          <div className="my-2 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <MdStorage size={50}></MdStorage>
              <h1 className="ps-4 text-lg font-semibold">Storage Device</h1>
            </div>
            <div>
              <Link href="/builderStorage">
                <button
                  className="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>

          {storage?.data.map((p) => (
            <div key={p._id} className="mt-5">
              <div className="flex justify-start">
                <img className="w-14 h-14" src={p?.image} alt="Image" />
                <div className="ps-3">
                  <div
                    className={`flex ${
                      window.innerWidth >= 1024
                        ? "justify-between"
                        : "justify-start"
                    } items-center sm:items-start text-base font-semibold flex-col lg:flex-row`}
                  >
                    <h1 className="text-orange-700">{p?.category}</h1>
                    <h1>{p?.status}</h1>
                  </div>
                  <div className="text-base font-semibold">{p?.name}</div>
                </div>
                <div className="ps-10">
                  <h1 className="text-lg font-bold">${p?.price}</h1>
                </div>
                <div className="ps-10">
                  <div className="flex items-center text-base font-bold">
                    <FcRating></FcRating>
                    <span className="ps-2 text-yellow-600">
                      {p?.individualRating}
                    </span>
                    <Link
                      href={`/`}
                      className="ml-12 text-red-500 hover:text-red-800"
                    >
                      <AiOutlineCloseSquare size={30}></AiOutlineCloseSquare>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-3 border-1 border-gray-400 hover:border-indigo-400" />
          <div className="my-2 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <MdMonitor size={50}></MdMonitor>
              <h1 className="ps-4 text-lg font-semibold">Monitor</h1>
            </div>
            <div>
              <Link href="/builderMonitor">
                <button
                  className="w-36 bg-gray-100 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md 
                py-2 px-2"
                >
                  <span>Choose Product</span>
                </button>
              </Link>
            </div>
          </div>

          {monitor?.data.map((p) => (
            <div key={p._id} className="mt-5">
              <div className="flex justify-start">
                <img className="w-14 h-14" src={p?.image} alt="Image" />
                <div className="ps-3">
                  <div
                    className={`flex ${
                      window.innerWidth >= 1024
                        ? "justify-between"
                        : "justify-start"
                    } items-center sm:items-start text-base font-semibold flex-col lg:flex-row`}
                  >
                    <h1 className="text-orange-700">{p?.category}</h1>
                    <h1>{p?.status}</h1>
                  </div>
                  <div className="text-base font-semibold">{p?.name}</div>
                </div>
                <div className="ps-10">
                  <h1 className="text-lg font-bold">${p?.price}</h1>
                </div>
                <div className="ps-10">
                  <div className="flex items-center text-base font-bold">
                    <FcRating></FcRating>
                    <span className="ps-2 text-yellow-600">
                      {p?.individualRating}
                    </span>
                    <Link
                      href={`/`}
                      className="ml-12 text-red-500 hover:text-red-800"
                    >
                      <AiOutlineCloseSquare size={30}></AiOutlineCloseSquare>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-3 border-1 border-gray-400 hover:border-indigo-400" />

          <div className="flex items-center justify-center">
            <button
              onClick={handleCompleteBuild}
              className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-bold text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white 
            before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 
            hover:before:border-[25px]"
            >
              <span className="relative z-10">Complete Build</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
