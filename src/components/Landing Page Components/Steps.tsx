import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full mt-24 gap-y-20 font-Inter">
      <h1 className="text-title font-semibold">How it Works</h1>

      <div className="flex flex-row items-baseline justify-center gap-10 text-main-black">
        <div className="flex w-1/6 flex-col justify-center">
          <div className="text-2xl font-semibold">1. Prompt</div>
          <div className="flex flex-wrap font-normal leading-tight">
            Concisely explain your course or lecture topic.
          </div>
        </div>
        <div className="flex w-1/6 flex-col justify-center">
          <div className="text-2xl font-semibold">2. Generate</div>
          <div className="flex flex-wrap font-normal leading-tight">
            Our AI generates detailed notes, slides, and script.
          </div>
        </div>
        <div className="flex w-1/6 flex-col justify-center">
          <div className="text-2xl font-semibold">3. Customize</div>
          <div className="flex flex-wrap font-normal leading-tight">
            Tailor the generated content to match your teaching style.
          </div>
        </div>
        <div className="flex w-1/6 flex-col justify-center">
          <div className="text-2xl font-semibold">4. Publish</div>
          <div className="flex flex-wrap font-normal leading-tight">
            Once you&apos;re happy with your video, download and share it!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
