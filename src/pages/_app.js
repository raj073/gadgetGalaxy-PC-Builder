import { AuthProvider } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Provider store={store}>
          <AuthProvider>
            <Toaster />
            {getLayout(<Component {...pageProps} />)}
          </AuthProvider>
        </Provider>
      </>
    </SessionProvider>
  );
}
