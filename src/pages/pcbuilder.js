import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PCBuilderPage = () => {
  return (
    <div>
      <h1 className="mt-20">This is PC Builder Page</h1>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
