import RootLayout from "@/components/Layouts/RootLayout";
import Hero from "@/components/UI/Hero";
import auth from "@/firebase/firebase.auth";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);

  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>gadgetGalaxy PC Builder</title>
      </Head>
      <Hero></Hero>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
