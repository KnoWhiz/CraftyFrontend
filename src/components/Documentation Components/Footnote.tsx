import React from "react";

const Footnote = () => {
  return (
    <div>
      <div className="pl-60 pt-24 mb-28 text-main-black">
        <div className="flex flex-col justify-center items-start h-1/3 w-5/6 gap-y-4 font-raleway">
          <h1 className="text-title font-semibold">Time Consuming and Cost</h1>
          <p>
            At present, the total time required to generate a script for a
            chapter video using GPT4 is about 30-40 minutes, and the total time
            required to generate a script using GPT3.5 is about 10-15 minutes.
            Among them, the latex generation of ppt takes 2-3 minutes, the
            script generation of GPT3.5 takes 1-2 minutes, the script generation
            of GPT4 takes 15-20 minutes, and the voice generation of a 5-6
            minute video takes 1-2 minutes. Video synthesis and processing are
            greatly affected by computer performance and video length, and it is
            roughly estimated to be about 10-20 minutes. In terms of cost, if
            GPT4 is used throughout the process to pursue quality, the final
            video of 16-17 minutes will cost 1.1-1.2 dollars. If GPT3.5 is used
            for script generation, the video length will be shortened to 5-6
            minutes, and the cost will drop to 40-50 cents. If the image
            generation link is removed, the cost will drop to 30-35 cents. If
            the voice generation link is removed, the cost will drop to 10-20
            cents (mainly from GPT generating slides).
          </p>
        </div>
      </div>
      <div className="h-1/3">
        <p>.</p>
      </div>
    </div>
  );
};

export default Footnote;
