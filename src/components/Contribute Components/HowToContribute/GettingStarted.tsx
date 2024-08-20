import React from "react";
import DocLine from "../../Documentation Components/DocLine";

const GettingStarted = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">How to Contribute</h1>
      <h3 className="text-[26px] font-semibold mb-6">Getting Started</h3>
      <div className="flex flex-col items-start justify-start gap-y-2 pl-3 w-full">
        <div>
          <h3 className="text-2xl font-bold inline">
            1. Fork the Repository:{" "}
          </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Click on the &quot;Fork&quot; button at the top right of the
            repository page.
          </h3>
        </div>
        <div>
          <h3 className="text-2xl font-bold inline">2. Clone the Fork: </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Clone your fork to your local machine using:
          </h3>
        </div>
        <DocLine
          lines={["git clone https://github.com/your-username/crafty.git"]}
          label={""}
        />
        <div>
          <h3 className="text-2xl font-bold inline">3. Create a branch: </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Create a new branch for your feature or bugfix:
          </h3>
        </div>
        <DocLine
          lines={["git checkout -b feature/your-feature-name"]}
          label={""}
        />
        <div>
          <h3 className="text-2xl font-bold inline">
            4. Install Dependencies:{" "}
          </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Follow the instructions in the{" "}
          </h3>
          <a
            href="https://github.com/KnoWhiz/CraftyModel/blob/main/README.md"
            className="cursor-pointer text-2xl font-bold inline text-button-blue underline"
            target="_blank"
          >
            README
          </a>
          <h3 className="text-2xl font-medium inline">
            {" "}
            to set up your development environment.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
