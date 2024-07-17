import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-y-20 font-Inter">
      <h1 className="text-title font-semibold">Features</h1>

      <div className="grid grid-cols-2 grid-rows-4 gap-4 font-medium gap-y-20">
        <div id="item1" className="flex flex-col justify-center items-center">
          <div className="w-1/2">
            <h1 className="text-3xl">AI-Powered Content</h1>
            <h2 className="text-2xl leading-tight">
              Turn learning objectives into engaging and informative scripts and
              slides automatically.
            </h2>
          </div>
        </div>

        <div id="item2" className="flex flex-col justify-center items-center">
          <img src="assets/Feature_1.png" alt="feature 1" className="w-3/5" />
        </div>

        <div id="item3" className="flex flex-col justify-center items-center">
          <img src="assets/Feature_2.png" alt="feature 2" className="w-3/5" />
        </div>

        <div id="item4" className="flex flex-col justify-center items-center">
          <div className="w-1/2">
            <h1 className="text-3xl">Easy-to-Use Interface</h1>
            <h2 className="text-2xl leading-tight">
              Crafty&apos;s intuitive platform makes video creation simple. No
              steep learning curve.
            </h2>
          </div>
        </div>

        <div id="item5" className="flex flex-col justify-center items-center">
          <div className="w-1/2">
            <h1 className="text-3xl">Multiple Learning Styles</h1>
            <h2 className="text-2xl leading-tight">
              Choose from a variety of customizable templates to match your own
              teaching style.
            </h2>
          </div>
        </div>

        <div id="item6" className="flex flex-col justify-center items-center">
          <img src="assets/Feature_3.png" alt="feature 3" className="w-3/5" />
        </div>

        <div id="item7" className="flex flex-col justify-center items-center">
          <img src="assets/Feature_4.png" alt="feature 4" className="w-3/5" />
        </div>

        <div id="item8" className="flex flex-col justify-center items-center">
          <div className="w-1/2">
            <h1 className="text-3xl">Time Efficiency</h1>
            <h2 className="text-2xl leading-tight">
              Tasks like script-to-slide conversion and basic video editing are
              all automated.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
