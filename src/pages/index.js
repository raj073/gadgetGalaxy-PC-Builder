import RootLayout from "@/components/Layouts/RootLayout";
import Hero from "@/components/UI/Hero";
import auth from "@/firebase/firebase.auth";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSession } from "next-auth/react";
import PcBuilderInfos from "@/components/UI/PcBuilderInfos";

const HomePage = ({ pcBuilderInfo }) => {
  const [user, loading, error] = useAuthState(auth);

  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>gadgetGalaxy PC Builder</title>
      </Head>
      <Hero></Hero>
      <PcBuilderInfos pcBuilderInfo={pcBuilderInfo}></PcBuilderInfos>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/pcbuilder");
  const data = await res.json();

  return {
    props: {
      pcBuilderInfo: data?.data,
    },
    revalidate: 10,
  };
};
