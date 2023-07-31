import React from "react";
import PcBuilderInfo from "./PcBuilderInfo";

const PcBuilderInfos = ({ pcBuilderInfo }) => {
  console.log(pcBuilderInfo);
  return (
    <div className="py-20">
      <h1 className="text-center text-3xl text-sky-500 mb-5">
        PC Components Featured Products
      </h1>
      {/* <hr class="border-[1.5] mx-8 border-blue-500 cursor-pointer hover:border-sky-500 duration-500" /> */}
      <div className="min-h-screen flex justify-center items-center py-10">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {pcBuilderInfo?.map((info) => (
            <PcBuilderInfo key={info._id} info={info}></PcBuilderInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcBuilderInfos;
