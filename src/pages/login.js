import RootLayout from "@/components/Layouts/RootLayout";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  // const handleGoogleSignIn = async () => {
  //   await signIn("google", {
  //     callbackUrl: "https://gadget-galaxy-pc-builder.vercel.app/",
  //   });
  // };

  const handleGithubSignIn = async () => {
    await signIn("github", {
      callbackUrl: "https://gadget-galaxy-pc-builder.vercel.app/",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-24 font-[Poppins]">
      <div className="flex flex-col bg-white shadow-xl px-4 sm:px-6 md:px-8 lg:px-20 py-8 rounded-md w-full max-w-md">
        <div className="font-medium text-center text-xl sm:text-2xl uppercase text-gray-800">
          Login To <br /> Gadget Galaxy PC Builder
        </div>

        {/* <div className="flex flex-col items-center mt-10">
          <button
            onClick={handleGoogleSignIn}
            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-red-500 hover:bg-red-700 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <div className="bg-white p-2 rounded-full">
              <svg className="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <span className="ml-4">Sign In with Google</span>
          </button>
        </div> */}

        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-sm text-gray-500 uppercase">
              Login
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <button
            onClick={handleGithubSignIn}
            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-300 hover:bg-green-600 text-gray-800 
            hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          >
            <div className="bg-white p-2 rounded-full">
              <svg
                className="w-5"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.77 3.58 22.72 8.55 23.89C9.15 23.97 9.3 23.64 9.3 23.4V20.84C5.3 21.3 4.54 19.4 4.54 19.4C4.13 18.5 3.41 18.2 3.41 18.2C2.47 17.57 3.56 17.58 3.56 17.58C4.67 17.61 5.12 18.8 5.12 18.8C5.95 20.49 7.77 19.96 8.8 19.6C8.94 19.13 9.38 18.9 9.85 18.7C7.04 18.49 4.34 17.36 4.34 12.79C4.34 11.27 5.06 10.04 6.32 9.33C6.15 9.02 5.74 7.77 6.34 5.86C6.34 5.86 7.29 5.63 9.3 6.95C10.56 6.67 11.82 6.53 13.09 6.53C14.36 6.53 15.63 6.67 16.9 6.95C18.91 5.63 19.86 5.86 19.86 5.86C20.46 7.77 20.05 9.02 19.88 9.33C21.14 10.04 21.86 11.27 21.86 12.79C21.86 17.38 19.16 18.49 16.34 18.7C16.8 18.95 17.25 19.46 17.25 20.6V23.41C17.25 23.65 17.4 23.97 18 23.89C22.95 22.72 26.54 17.77 26.54 12C26.54 5.37 21.17 0 14.54 0H12Z"
                  fill="#211F1F"
                />
              </svg>
            </div>
            <span className="ml-4">Sign In with Github</span>
          </button>
        </div>

        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-sm text-gray-500 uppercase"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
