import React from "react";

const Welcome = () => {
  return (
    <div className="flex justify-center items-center pt-12 pb-24 mt-24 ml-48">
      <div className="flex flex-col justify-center items-center h-1/3 w-1/2 gap-y-4 font-raleway">
        <h1 className="text-title font-semibold text-center">
          Crafty: Developer Documentation
        </h1>

        <h2 className="text-2xl font-medium leading-tight">
          Welcome developers! This comprehensive documentation guides you
          through integrating Crafty into your applications
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
