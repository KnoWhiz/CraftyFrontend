import React from "react";

const MakingChanges = () => {
  return (
    <div>
      <h3 className="text-[26px] font-semibold mb-6">Making Changes</h3>
      <div className="flex flex-col items-start justify-start gap-y-0.5 pl-3 w-full">
        <div>
          <h3 className="text-2xl font-bold inline">1. Code: </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Implement your feature or bugfix. Ensure your code follows the
            project&apos;s coding standards.
          </h3>
        </div>
        <div>
          <h3 className="text-2xl font-bold inline">2. Test: </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Write tests to cover your changes and ensure all existing tests
            pass.
          </h3>
        </div>
        <div>
          <h3 className="text-2xl font-bold inline">3. Document: </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Update the documentation to reflect your changes if applicable.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MakingChanges;
