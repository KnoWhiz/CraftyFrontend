import React from "react";
import DocLine from "../../Documentation Components/DocLine";

const SubmittingContribution = () => {
  return (
    <div className="w-full">
      <h3 className="text-[26px] font-semibold mb-6">
        Submitting Your Contribution
      </h3>
      <div className="flex flex-col items-start justify-start gap-y-2 pl-3 w-full">
        <div>
          <h3 className="text-2xl font-bold inline">
            1. Commit Your Changes:{" "}
          </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Write a clear and concise commit message:
          </h3>
        </div>
        <DocLine
          lines={[
            "git add .",
            "git commit -m &quot;Add feature: Your feature description&quot;",
          ]}
          label={""}
        />
        <div>
          <h3 className="text-2xl font-bold inline">2. Push to Your Fork: </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Push your changes to your forked repository:
          </h3>
        </div>
        <DocLine
          lines={["git push origin feature/your-feature-name"]}
          label={""}
        />
        <div>
          <h3 className="text-2xl font-bold inline">
            3. Open a Pull Request:{" "}
          </h3>
          <h3 className="text-2xl font-medium inline">
            {" "}
            Navigate to the original repository and click the &quot;New Pull
            Request&quot; button. Fill in the template with relevant details
            about your changes.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SubmittingContribution;
