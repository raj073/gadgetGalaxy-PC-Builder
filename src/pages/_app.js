import { AuthProvider } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <>
        <AuthProvider>
          <Toaster />
          {getLayout(<Component {...pageProps} />)}
        </AuthProvider>
      </>
    </SessionProvider>
  );
}
