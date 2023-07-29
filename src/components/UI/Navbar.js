import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 font-[Poppins] z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          {/* <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span> */}
          Gadget Galaxy PC Builder
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {/* <ion-icon name={open ? "close" : "menu"}>test</ion-icon> */}
          <AiOutlineMenu name={open ? "close" : "menu"}></AiOutlineMenu>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-lg md:my-0 my-7">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-800 hover:font-semibold duration-500"
            >
              Home
            </Link>
          </li>

          <li className="md:ml-8 text-lg md:my-0 my-7">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="#"
                className="text-gray-800 hover:text-blue-800 hover:font-semibold duration-500"
              >
                Category
              </Link>

              <div
                className={`absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      CPU / Processor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Motherboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      RAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Power Supply Unit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Monitor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Others
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="md:ml-8 text-lg md:my-0 my-7">
            <Link
              href={"/login"}
              className="inline-block w-full rounded-sm px-6 py-2 text-base text-center bg-gray-300 text-black hover:bg-teal-700 hover:text-white duration-300 font-primary"
            >
              Login
            </Link>
          </li>
          <li className="md:ml-8 text-lg md:my-0 my-7">
            <Link
              href={"/signup"}
              className="inline-block w-full rounded-sm px-6 py-2 text-base text-center bg-teal-600 text-black hover:bg-emerald-600-700 hover:text-white duration-300 font-primary"
            >
              Sign up
            </Link>
          </li>

          <button
            className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
          >
            PC Builder
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
