import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

import { useSignOut } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useSession, signOut as nextAuthSignOut } from "next-auth/react";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  const { data: session } = useSession();

  const isLoggedIn = session?.user?.email;

  const router = useRouter();

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

  const handleSignOut = async () => {
    try {
      await nextAuthSignOut();
      toast.success("User Logged Out Successfully", {
        position: "top-right",
      });
      router.push("/login");
    } catch (error) {}
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 font-[Poppins] z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link href={"/"}>
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            Gadget Galaxy PC Builder
          </div>
        </Link>

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
                href="/"
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
                      href="/cpu"
                      className="block px-4 py-2 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      CPU / Processor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/motherboard"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Motherboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ram"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      RAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/power"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Power Supply Unit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/storage"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/monitor"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Monitor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/others"
                      className="block px-4 py-1 text-base text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
                    >
                      Others
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {isLoggedIn ? (
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <button
                onClick={handleSignOut}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 border-b-4 border-orange-700 hover:border-orange-400 rounded"
              >
                Signout
              </button>
            </li>
          ) : (
            <li className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                href={"/login"}
                className="inline-block w-full rounded-sm px-6 py-2 text-base text-center bg-gray-300 text-black hover:bg-teal-700 hover:text-white duration-300 font-primary"
              >
                Login
              </Link>
            </li>
          )}

          <Link href={`/pcbuilder`}>
            <button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
              PC Builder
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
